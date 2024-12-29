import Button from "../base/Button.jsx";
import { jsPDF } from "jspdf";

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
  });

  const source = document.querySelector(".preview-page");
  const height = doc.internal.pageSize.getHeight();
  const width = doc.internal.pageSize.getWidth();
  const marginTBInPixels = Math.round(height * 0.05);

  source.classList.add(printingClass);

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
    },
    callback: (doc) => {
      doc.save(filename + ".pdf");
      window.open(doc.output("bloburl"));
      source.classList.remove(printingClass);
    },
  };

  doc.html(source, options);
}
