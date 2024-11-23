import InputWithLabel from "./InputWithLabel.jsx";

const orderedInputProps = ["name", "surname", "title", "aboutMe"];

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
            label="LABEL"
            value={personalInfo[prop]}
            placeholder="PLACEHOLDER"
            setValue={setValueFor(prop)}
            type="text"
            maxLength="30"
            required={false}
          />
        ))}
      </form>
    </div>
  );
}

export default EditPersonalInfoPanel;
