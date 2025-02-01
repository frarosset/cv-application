import PreviewListWithDates from "./PreviewListWithDates.jsx";
import "../../styles/preview/PreviewPanelWithList.css";

const textProperties = [["institution", "address"], "degree"];

function PreviewEducationPanel({ education }) {
  if (education.allIds.length > 0) {
    return (
      <div className="preview-panel-with-list preview-education-panel">
        <h3>Education</h3>

        <PreviewListWithDates
          customClass={"education"}
          data={education}
          textProperties={textProperties}
        />
      </div>
    );
  }
}

export default PreviewEducationPanel;
