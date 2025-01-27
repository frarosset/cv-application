import PreviewListWithTextOnly from "./PreviewListWithTextOnly.jsx";
import "../../styles/preview/PreviewListWithTextOnly.css";

const textProperties = ["heading", "text"];

function PreviewSkillsPanel({ skills }) {
  if (skills.allIds.length > 0) {
    return (
      <div className="preview-panel-with-list preview-skills-panel">
        <h3>Skills</h3>
        <PreviewListWithTextOnly
          customClass={"skills"}
          data={skills}
          textProperties={textProperties}
        />
      </div>
    );
  }
}

export default PreviewSkillsPanel;
