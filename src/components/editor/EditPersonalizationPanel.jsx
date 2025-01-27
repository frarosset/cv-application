import ArrayOfInputWithLabel from "../base/ArrayOfInputWithLabel.jsx";
import inputProperties from "../../data/inputProperties.json";
import "../../styles/editor/EditSectionPanel.css";

const orderedInputProps = [
  "format",
  "",
  "mainFont",
  "headingFont",
  "accentFont",
  "detailFont",
  "fullNameFont",
  "titleFont",
  "",
  "accentColor",
  "headingColor",
  "detailColor",
  "textColor",
  "",
  "fullnameFontsize",
  "titleFontsize",
  "aboutMeFontsize",
  "",
  "photoWidth",
  "photoRadius",
];

const inputProps = inputProperties.personalization;

function EditPersonalizationPanel({ personalization, setPersonalization }) {
  const setValueFor = (prop) => (value) => {
    setPersonalization((personalization) => ({
      ...personalization,
      [prop]: value,
    }));
  };

  return (
    <div className="edit-section-panel edit-personalizeation-panel">
      <h3>Personalize page</h3>

      <form>
        <ArrayOfInputWithLabel
          {...{ orderedInputProps, inputProps, setValueFor }}
          item={personalization}
        />
      </form>
    </div>
  );
}

export default EditPersonalizationPanel;
