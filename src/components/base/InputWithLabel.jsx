import Input from "./Input.jsx";
import TextArea from "./TextArea.jsx";
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
