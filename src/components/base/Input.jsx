function Input({
  id,
  name,
  value = "",
  setValue,
  placeholder = "",
  type = "text",
  maxLength = null,
  required = false,
}) {
  return (
    <input
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      type={type}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      maxLength={maxLength}
      required={required}
    />
  );
}

export default Input;
