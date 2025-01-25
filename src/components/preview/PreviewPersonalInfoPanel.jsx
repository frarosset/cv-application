import { useRef } from "react";
import useIsOverflow from "../../customHooks/useIsOverflow.js";
import Text from "../base/Text.jsx";
import TextWithIcon from "../base/TextWithIcon.jsx";
import "../../styles/preview/PreviewPersonalInfoPanel.css";

const textPropertiesFullName = ["name", "surname"];
const textPropertiesOther = ["title", "aboutMe"];
const textWithIconsProperties = [
  "location",
  "email",
  "phone",
  "linkedin",
  "website",
  "github",
];

function PreviewPersonalInfoPanel({ personalInfo }) {
  /* *************************************************************************** */
  // The contact list defined below has a grid layout. The number of columns
  // (initialContactCols) has been set based on the number of non-empty contact
  // elements (contactItemsCount).
  // If the contact list div overflows, the number of columns has been halved
  // (modContactCols).
  // See "../../customHooks/useIsOverflow.js" for more details

  const ref = useRef();

  const setContactCols = (num) =>
    document.documentElement.style.setProperty("--preview-contacts-cols", num);

  const contactItemsCount = textWithIconsProperties.reduce((count, prop) => {
    const value = personalInfo[prop];
    if (value && value.length >= 0) count++;
    return count;
  }, 0);
  const initialContactCols = contactItemsCount < 5 ? contactItemsCount : 3;
  const modContactCols = Math.ceil(initialContactCols / 2);

  const isOverflowXPreCallback = () => {
    // before checking the overflow condition, set the initial number of columns
    if (ref) {
      setContactCols(initialContactCols);
    }
  };

  const isOverflowXPostCallback = (hasOverflowX) => {
    // after checking the overflow condition, set the modified number of columns if it overflows
    if (hasOverflowX) setContactCols(modContactCols);
  };

  useIsOverflow(ref, false, isOverflowXPostCallback, isOverflowXPreCallback);
  /* *************************************************************************** */

  return (
    <div className="preview-personal-info-panel">
      <h3>Personal Info</h3>
      <div className="contact-list" ref={ref}>
        {textWithIconsProperties.map((prop) => {
          const value = personalInfo[prop];
          return (
            value && (
              <TextWithIcon
                key={prop}
                iconName={{ name: `${prop}White`, format: "png" }}
                customClass={prop}
                value={value}
              />
            )
          );
        })}
      </div>

      <div className="full-name">
        {textPropertiesFullName.map((prop) => {
          const value = personalInfo[prop];
          return value && <Text key={prop} customClass={prop} value={value} />;
        })}
      </div>

      {personalInfo.photo && (
        <img className="photo" src={personalInfo.photo.dataUrl} />
      )}

      {textPropertiesOther.map((prop) => {
        const value = personalInfo[prop];
        return value && <Text key={prop} customClass={prop} value={value} />;
      })}
    </div>
  );
}

export default PreviewPersonalInfoPanel;
