const _placeholderValue = ""; // empty string means invalid value
const _emptyValue = "___empty___"; // empty string means invalid value: if the provided emptyString is "", is should be changed internally to not make it appear invalid

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
  const hasEmptyValueOption = emptyValue != null;

  return (
    <select
      id={id}
      name={name}
      value={
        value == null
          ? _placeholderValue
          : hasEmptyValueOption && value === emptyValue
          ? _emptyValue
          : value
      }
      required={required}
      onChange={(e) => {
        const valueToSet =
          hasEmptyValueOption && e.target.value === _emptyValue
            ? emptyValue
            : e.target.value;
        setValue(valueToSet);
      }}
      disabled={disabled}
    >
      {placeholder && (
        <option disabled value={_placeholderValue}>
          {placeholder}
        </option>
      )}
      {hasEmptyValueOption && <option value={_emptyValue}>{"-"}</option>}
      {options.map((option, idx) => (
        <option key={idx} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default SelectInput;
