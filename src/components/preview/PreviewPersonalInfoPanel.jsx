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
  return (
    <div className="preview-personal-info-panel">
      <h3>Personal Info</h3>
      <div className="full-name">
        {textPropertiesFullName.map((prop) => (
          <Text key={prop} customClass={prop} value={personalInfo[prop]} />
        ))}
      </div>
      {textPropertiesOther.map((prop) => (
        <Text key={prop} customClass={prop} value={personalInfo[prop]} />
      ))}

      <div className="contact-list">
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
    </div>
  );
}

export default PreviewPersonalInfoPanel;
