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
  "mainFontsize",
  "headingsFontsize",
  "accentFontsize",
  "detailsFontsize",
  "fullnameFontsize",
  "titleFontsize",
  "aboutMeFontsize",
  "contactsFontsize",
  "",
  "lineHeight",
  "headingsLineHeight",
  "fullnameLineHeight",
  "titleLineHeight",
  "",
  "photoWidth",
  "photoRadius",
  "",
  "pageTbPadding",
  "pageLrPadding",
  "pageGap",
  "personalInfoGap",
  "sectionItemsGap",
  "sectionListGap",
  "contactsTbPadding",
  "contactsLrPadding",
  "contactsVGap",
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
