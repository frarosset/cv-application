function TextArea({
  id,
  name,
  value = "",
  setValue,
  placeholder = "",
  maxLength = null,
  required = false,
}) {
  return (
    <textarea
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      maxLength={maxLength}
      required={required}
    ></textarea>
  );
}

export default TextArea;
