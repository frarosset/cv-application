import Button from "../base/Button.jsx";

// The whole website is set to print only the .preview-page div
// see: https://dev.to/amruthpillai/avoiding-awkward-element-breaks-in-print-html-5goe

function PrintButton() {
  return (
    <Button
      customCssClass={"download-btn normally-hidden"}
      iconName={"printer"}
      onClickCallback={() => {
        window.print();
      }}
    />
  );
}

export default PrintButton;
