import Button from "../base/Button.jsx";

// The whole website is set to print only the .preview-page div
// see: https://dev.to/amruthpillai/avoiding-awkward-element-breaks-in-print-html-5goe

function PrintButton({ showText = false }) {
  return (
    <Button
      customCssClass={"print-btn functionality-btn normally-hidden"}
      iconName={"printer"}
      text={showText && "Print"}
      onClickCallback={() => {
        window.print();
      }}
    />
  );
}

export default PrintButton;
