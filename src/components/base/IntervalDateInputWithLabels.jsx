import DateInputWithLabel from "../base/DateInputWithLabel.jsx";
import InputWithLabel from "./InputWithLabel.jsx";

const ongoingProp = "ongoing";

function IntervalDateInputWithLabels({
  fromDateProp = "fromDate",
  toDateProp = "toDate",
  inputProps,
  item,
  setValueFor,
}) {
  const constraints = computeConstraints(fromDateProp, toDateProp, item);
  const isOngoing = item[ongoingProp] != null ? item[ongoingProp] : false;

  return (
    <>
      {[fromDateProp, toDateProp].map((prop) => (
        <DateInputWithLabel
          key={prop}
          id={prop}
          name={prop}
          valueMonth={item[`${prop}Month`]}
          valueYear={item[`${prop}Year`]}
          setMonth={setValueFor(`${prop}Month`)}
          setYear={setValueFor(`${prop}Year`)}
          required={inputProps[prop].required}
          label={inputProps[prop].label}
          fromMonth={constraints[prop].fromMonth}
          fromYear={constraints[prop].fromYear}
          toMonth={constraints[prop].toMonth}
          toYear={constraints[prop].toYear}
        />
      ))}
      <InputWithLabel
        key={ongoingProp}
        id={ongoingProp}
        name={ongoingProp}
        label={inputProps[ongoingProp].label}
        setValue={setValueFor(ongoingProp)}
        type={inputProps[ongoingProp].type}
        required={inputProps[ongoingProp].required}
        checked={isOngoing}
      />
    </>
  );
}

function computeConstraints(fromDateProp, toDateProp, item) {
  const fromMonth = item[`${fromDateProp}Month`];
  const fromYear = item[`${fromDateProp}Year`];
  const toMonth = item[`${toDateProp}Month`];
  const toYear = item[`${toDateProp}Year`];

  return {
    [fromDateProp]: { toYear, toMonth },
    [toDateProp]: { fromYear, fromMonth },
  };
}

export default IntervalDateInputWithLabels;
