function Input({
  id,
  name,
  value = "",
  setValue,
  placeholder = "",
  type = "text",
  maxLength = null,
  required = false,
  checked = null,
}) {
  return (
    <input
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      type={type}
      onChange={(e) => {
        setValue(
          type != "checkbox" && type != "radio"
            ? e.target.value
            : e.target.checked
        );
      }}
      maxLength={maxLength}
      required={required}
      checked={checked}
    />
  );
}

export default Input;
