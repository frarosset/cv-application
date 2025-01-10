import Button from "../base/Button.jsx";
import { jsPDF } from "jspdf";
import fonts from "./getFontFaces.js";

// to download a div as pdf, the jsPdf library is used,
// in particular the .html method
// see: https://parallax.github.io/jsPDF/docs/module-html.html#~html
// To embed custom fonts, see: https://github.com/parallax/jsPDF/pull/3040

const printingClass = "printing";

function DownloadButton({ filename }) {
  return (
    <Button
      customCssClass={"download-btn"}
      iconName={"download"}
      onClickCallback={() => {
        downloadPdf(filename);
      }}
    />
  );
}

export default DownloadButton;

function downloadPdf(filename) {
  let doc = new jsPDF({
    unit: "px",
    hotfixes: ["px_scaling"],
    putOnlyUsedFonts: true,
  });

  const source = document.querySelector(".preview-page");
  const height = doc.internal.pageSize.getHeight();
  const width = doc.internal.pageSize.getWidth();
  const marginTBInPixels = Math.round(height * 0.05);
  const fontFamily = source.style.fontFamily;

  const options = {
    background: "#fff",
    pagesplit: true,
    margin: [marginTBInPixels, 0, marginTBInPixels, 0],
    x: 0,
    y: 0,
    autoPaging: "text",
    width: width,
    windowWidth: width,
    html2canvas: {
      dpi: 300,
      letterRendering: true,
      useCORS: true,
      onclone: (doc, element) => {
        // this allows to modify the html to be exported for printing, without actually showing any difference in the dom
        element.querySelector(".preview-page").classList.add(printingClass);
      },
    },
    fontFaces: fonts[fontFamily],
    callback: (doc) => {
      doc.save(filename + ".pdf");
      window.open(doc.output("bloburl"));
    },
  };

  doc.html(source, options);
}
