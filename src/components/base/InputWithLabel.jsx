import Input from "./Input.jsx";
import TextArea from "./TextArea.jsx";
import SelectInput from "./SelectInput.jsx";
import "../../styles/base/InputWithLabel.css";

function InputWithLabel({
  id,
  name,
  label,
  value = "",
  setValue,
  placeholder = "",
  type = "text",
  maxLength = null,
  required = false,
  checked = false,
  options = [],
}) {
  const inputOfType =
    type === "textarea" ? (
      <TextArea
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        setValue={setValue}
        maxLength={maxLength}
        required={required}
      />
    ) : type === "select" ? (
      <SelectInput
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        setValue={setValue}
        required={required}
        options={options}
      />
    ) : (
      <Input
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        setValue={setValue}
        type={type}
        maxLength={maxLength}
        required={required}
        checked={checked}
      />
    );

  return (
    <div className="input-with-label">
      <label htmlFor={id}>{label}</label>
      {inputOfType}
    </div>
  );
}

export default InputWithLabel;
