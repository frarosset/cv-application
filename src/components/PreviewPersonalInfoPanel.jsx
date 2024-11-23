import Text from "./Text.jsx";
import TextWithIcon from "./TextWithIcon.jsx";

const textProperties = ["name", "surname", "title", "aboutMe"];
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
      {textProperties.map((prop) => (
        <Text key={prop} customClass={prop} value={personalInfo[prop]} />
      ))}

      <div className="contact-list">
        {textWithIconsProperties.map((prop) => {
          const value = personalInfo[prop];
          return (
            value && (
              <TextWithIcon
                key={prop}
                iconName={prop}
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
