import PreviewListWithDates from "./PreviewListWithDates.jsx";

const textProperties = ["institution", "address", "degree"];

function PreviewEducationPanel({ education }) {
  return (
    <div className="preview-education-panel">
      <h3>Education</h3>

      <PreviewListWithDates
        customClass={"education"}
        data={education}
        textProperties={textProperties}
      />
    </div>
  );
}

export default PreviewEducationPanel;
