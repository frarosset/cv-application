import Button from "../base/Button.jsx";

// The whole website is set to print only the .preview-page div
// see: https://dev.to/amruthpillai/avoiding-awkward-element-breaks-in-print-html-5goe

function TogglePreviewEditViewButton({
  previewView,
  setPreviewView,
  showText = false,
}) {
  return (
    <Button
      customCssClass={"toggle-preview-view-btn functionality-btn"}
      iconName={previewView ? "edit" : "eye"}
      text={showText && (previewView ? "Edit" : "Preview")}
      onClickCallback={() => setPreviewView((val) => !val)}
    />
  );
}

export default TogglePreviewEditViewButton;
