import PreviewListWithTextOnly from "./PreviewListWithTextOnly.jsx";
import "../../styles/preview/PreviewListWithTextOnly.css";

const textProperties = ["heading", "text"];

function PreviewLanguagesPanel({ languages }) {
  if (languages.allIds.length > 0) {
    return (
      <div className="preview-panel-with-list preview-languages-panel">
        <h3>Languages</h3>
        <PreviewListWithTextOnly
          customClass={"languages"}
          data={languages}
          textProperties={textProperties}
        />
      </div>
    );
  }
}

export default PreviewLanguagesPanel;
