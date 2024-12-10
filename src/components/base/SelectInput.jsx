function SelectInput({
  id,
  name,
  value = null,
  options,
  emptyValue = null,
  setValue,
  placeholder = "",
  required = false,
}) {
  return (
    <select
      id={id}
      name={name}
      value={value}
      required={required}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    >
      <option value={null} disabled>
        {placeholder}
      </option>
      {emptyValue != null && <option value={emptyValue}>{"-"}</option>}
      {options.map((option, idx) => (
        <option key={idx} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default SelectInput;
