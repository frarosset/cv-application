import PreviewPersonalInfoPanel from "./PreviewPersonalInfoPanel.jsx";
import PreviewEducationPanel from "./PreviewEducationPanel.jsx";
import PreviewProfessionalExperience from "./PreviewProfessionalExperience.jsx";

function PreviewPanel(props) {
  return (
    <div className="preview-panel">
      <h2>Preview Panel</h2>
      <PreviewPersonalInfoPanel personalInfo={props.personalInfo} />
      <PreviewEducationPanel />
      <PreviewProfessionalExperience />
    </div>
  );
}

export default PreviewPanel;
