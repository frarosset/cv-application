import DateInputWithLabel from "./DateInputWithLabel.jsx";
import InputWithLabel from "./InputWithLabel.jsx";

const ongoingProp = "ongoing";

function SingleDateInputWithLabels({
  dateProp = "date",
  inputProps,
  item,
  setValueFor,
}) {
  const isOngoing = item[ongoingProp] != null ? item[ongoingProp] : false;
  const constraints = computeConstraints(dateProp, isOngoing);

  return (
    <>
      <DateInputWithLabel
        key={dateProp}
        id={dateProp}
        name={dateProp}
        valueMonth={item[`${dateProp}Month`]}
        valueYear={item[`${dateProp}Year`]}
        setMonth={setValueFor(`${dateProp}Month`)}
        setYear={setValueFor(`${dateProp}Year`)}
        required={inputProps[dateProp].required}
        label={inputProps[dateProp].label}
        fromMonth={constraints[dateProp].fromMonth}
        fromYear={constraints[dateProp].fromYear}
        toMonth={constraints[dateProp].toMonth}
        toYear={constraints[dateProp].toYear}
        disabled={constraints[dateProp].disabled}
      />
      <InputWithLabel
        key={ongoingProp}
        id={ongoingProp}
        name={ongoingProp}
        label={inputProps[ongoingProp].label}
        setValue={(val) => {
          if (val) {
            // reset to date input
            setValueFor(`${dateProp}Month`)(null);
            setValueFor(`${dateProp}Year`)(null);
          }
          setValueFor(ongoingProp)(val);
        }}
        type={inputProps[ongoingProp].type}
        required={inputProps[ongoingProp].required}
        checked={isOngoing}
      />
    </>
  );
}

function computeConstraints(dateProp, isOngoing) {
  return {
    [dateProp]: { disabled: isOngoing },
  };
}

export default SingleDateInputWithLabels;
