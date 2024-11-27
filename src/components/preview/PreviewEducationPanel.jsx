import PreviewListWithDates from "./PreviewListWithDates.jsx";
import "../../styles/preview/previewPanelWithListAndDates.css";

const textProperties = ["institution", "address", "degree"];

function PreviewEducationPanel({ education }) {
  return (
    <div className="preview-panel-with-list-and-dates preview-education-panel">
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
