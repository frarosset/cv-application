import PreviewPersonalInfoPanel from "./PreviewPersonalInfoPanel.jsx";
import PreviewEducationPanel from "./PreviewEducationPanel.jsx";

function PreviewPanel() {
  return (
    <div className="preview-panel">
      <h2>Preview Panel</h2>
      <PreviewPersonalInfoPanel />
      <PreviewEducationPanel />
    </div>
  );
}

export default PreviewPanel;
