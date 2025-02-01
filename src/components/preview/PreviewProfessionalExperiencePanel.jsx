import PreviewListWithDates from "./PreviewListWithDates.jsx";
import "../../styles/preview/PreviewPanelWithList.css";

const textProperties = [["institution", "address"], "role"];

function PreviewProfessionalExperiencePanel({ professionalExperience }) {
  if (professionalExperience.allIds.length > 0) {
    return (
      <div className="preview-panel-with-list preview-professional-experience-panel">
        <h3>Professional Experience</h3>

        <PreviewListWithDates
          customClass={"professional-experience"}
          data={professionalExperience}
          textProperties={textProperties}
        />
      </div>
    );
  }
}

export default PreviewProfessionalExperiencePanel;
