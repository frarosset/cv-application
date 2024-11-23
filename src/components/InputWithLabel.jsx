import Input from "./Input.jsx";
import TextArea from "./TextArea.jsx";

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
