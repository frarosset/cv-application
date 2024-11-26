import PreviewListWithDates from "./PreviewListWithDates.jsx";

const textProperties = ["institution", "address", "role"];

function PreviewProfessionalExperience({ professionalExperience }) {
  return (
    <div className="preview-professional-experience-panel">
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
