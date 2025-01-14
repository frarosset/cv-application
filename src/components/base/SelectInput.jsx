const valueToShowPlaceholder = "__showPlaceholder";

function SelectInput({
  id,
  name,
  value,
  options,
  emptyValue = null,
  setValue,
  placeholder = null,
  required = false,
  disabled = false,
}) {
  return (
    <select
      id={id}
      name={name}
      value={value == null ? valueToShowPlaceholder : value}
      required={required}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      disabled={disabled}
    >
      {placeholder && (
        <option disabled value={valueToShowPlaceholder}>
          {placeholder}
        </option>
      )}
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
