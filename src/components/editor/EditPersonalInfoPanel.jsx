import ArrayOfInputWithLabel from "../base/ArrayOfInputWithLabel.jsx";
import inputProperties from "../../data/inputProperties.json";
import "../../styles/editor/EditSectionPanel.css";

const orderedInputProps = [
  "name",
  "surname",
  "title",
  "aboutMe",
  "location",
  "email",
  "phone",
  "linkedin",
  "website",
  "github",
];

const inputProps = inputProperties.personalInfo;

function EditPersonalInfoPanel({ personalInfo, setPersonalInfo }) {
  const setValueFor = (prop) => (value) => {
    setPersonalInfo((personalInfo) => ({
      ...personalInfo,
      [prop]: value,
    }));
  };

  return (
    <div className="edit-section-panel edit-personal-info-panel">
      <h3>Edit Personal Info</h3>

      <form>
        <ArrayOfInputWithLabel
          {...{ orderedInputProps, inputProps, setValueFor }}
          item={personalInfo}
        />
      </form>
    </div>
  );
}

export default EditPersonalInfoPanel;
