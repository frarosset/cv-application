import PreviewPersonalInfoPanel from "./PreviewPersonalInfoPanel.jsx";
import PreviewEducationPanel from "./PreviewEducationPanel.jsx";
import PreviewProfessionalExperience from "./PreviewProfessionalExperience.jsx";
import "../../styles/preview/PreviewPage.css";

function PreviewPage(props) {
  return (
    <div className="preview-page">
      <PreviewPersonalInfoPanel personalInfo={props.personalInfo} />
      <PreviewEducationPanel education={props.education} />
      <PreviewProfessionalExperience />
    </div>
  );
}

export default PreviewPage;
