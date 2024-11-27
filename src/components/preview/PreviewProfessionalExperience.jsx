import PreviewListWithDates from "./PreviewListWithDates.jsx";
import "../../styles/preview/previewPanelWithListAndDates.css";

const textProperties = ["institution", "address", "role"];

function PreviewProfessionalExperience({ professionalExperience }) {
  return (
    <div className="preview-panel-with-list-and-dates preview-professional-experience-panel">
      <h3>Professional Experience</h3>

      <PreviewListWithDates
        customClass={"professional-experience"}
        data={professionalExperience}
        textProperties={textProperties}
      />
    </div>
  );
}

export default PreviewProfessionalExperience;
