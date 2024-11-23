import InputWithLabel from "./InputWithLabel.jsx";
import inputProperties from "../data/inputProperties.json";

const orderedInputProps = ["name", "surname", "title", "aboutMe"];
const inputProps = inputProperties.personalInfo;

function EditPersonalInfoPanel({ personalInfo, setPersonalInfo }) {
  const setValueFor = (property) => (value) => {
    setPersonalInfo({
      ...personalInfo,
      [property]: value,
    });
  };

  return (
    <div className="edit-personal-info-panel">
      <h3>Edit Personal Info</h3>

      <form>
        {orderedInputProps.map((prop) => (
          <InputWithLabel
            key={prop}
            id={prop}
            name={prop}
            label={inputProps[prop].label}
            value={personalInfo[prop]}
            placeholder={inputProps[prop].placeholder}
            setValue={setValueFor(prop)}
            type={inputProps[prop].type}
            maxLength={inputProps[prop].maxLength}
            required={inputProps[prop].required}
          />
        ))}
      </form>
    </div>
  );
}

export default EditPersonalInfoPanel;
