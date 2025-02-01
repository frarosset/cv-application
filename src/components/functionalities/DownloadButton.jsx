import Button from "../base/Button.jsx";
import { jsPDF } from "jspdf";
import getFonts from "./getFontFaces.js";

// to download a div as pdf, the jsPdf library is used,
// in particular the .html method
// see: https://parallax.github.io/jsPDF/docs/module-html.html#~html
// To embed custom fonts, see: https://github.com/parallax/jsPDF/pull/3040

const printingClass = "printing";

function DownloadButton({
  filename,
  format = "a4",
  fontFaces = [],
  showText = false,
  pageTbPaddingInteger = 5,
}) {
  return (
    <Button
      customCssClass={"download-btn functionality-btn"}
      iconName={"download"}
      text={showText && "Export PDF"}
      onClickCallback={() => {
        downloadPdf(filename, format, fontFaces, pageTbPaddingInteger);
      }}
    />
  );
}

export default DownloadButton;

function downloadPdf(filename, format, fontFaces, pageTbPaddingInteger) {
  let doc = new jsPDF({
    unit: "px",
    hotfixes: ["px_scaling"],
    putOnlyUsedFonts: true,
    compress: true,
    format: format,
  });

  const source = document.querySelector(".preview-page");
  const height = doc.internal.pageSize.getHeight();
  const width = doc.internal.pageSize.getWidth();
  const sourceWidth = source.offsetWidth;
  const marginTBInPixels = Math.round((height * pageTbPaddingInteger) / 100);

  const hasOverflow = source.scrollHeight > source.offsetHeight;
  const fonts = getFonts();
  // fonts is created dynamically: if not loaded, do nothing
  if (!fonts) return;

  const options = {
    background: "#fff",
    pagesplit: true,
    margin: [hasOverflow ? marginTBInPixels : 0, 0, marginTBInPixels, 0],
    x: 0,
    y: 0,
    autoPaging: "text",
    width: width,
    windowWidth: sourceWidth,
    html2canvas: {
      dpi: 300,
      letterRendering: true,
      useCORS: true,
      scale: width / sourceWidth,
      onclone: (doc, element) => {
        // this allows to modify the html to be exported for printing, without actually showing any difference in the dom
        const clonedSource = element.querySelector(".preview-page");
        clonedSource.classList.add(printingClass);
        clonedSource.style.width = `${sourceWidth}px`;
      },
    },
    fontFaces: fontFaces.reduce((arr, font) => {
      arr.push(...fonts[font]);
      return arr;
    }, []),
    callback: (doc) => {
      doc.save(filename + ".pdf");
      // window.open(doc.output("bloburl"));
    },
  };

  doc.html(source, options);
}
