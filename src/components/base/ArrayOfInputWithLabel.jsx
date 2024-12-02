import InputWithLabel from "./InputWithLabel.jsx";

function ArrayOfInputWithLabel({
  orderedInputProps,
  inputProps,
  item,
  setValueFor,
}) {
  return (
    <>
      {orderedInputProps.map((prop) => (
        <InputWithLabel
          key={prop}
          id={prop}
          name={prop}
          label={inputProps[prop].label}
          value={item[prop]}
          placeholder={inputProps[prop].placeholder}
          setValue={setValueFor(prop)}
          type={inputProps[prop].type}
          maxLength={inputProps[prop].maxLength}
          required={inputProps[prop].required}
        />
      ))}
    </>
  );
}

export default ArrayOfInputWithLabel;
