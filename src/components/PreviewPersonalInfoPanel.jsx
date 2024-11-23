import Text from "./Text.jsx";
const textProperties = ["name", "surname", "title", "aboutMe"];

function PreviewPersonalInfoPanel({ personalInfo }) {
  return (
    <div className="preview-personal-info-panel">
      <h3>Personal Info</h3>
      {textProperties.map((prop) => (
        <Text key={prop} customClass={prop} value={personalInfo[prop]} />
      ))}
    </div>
  );
}

export default PreviewPersonalInfoPanel;
