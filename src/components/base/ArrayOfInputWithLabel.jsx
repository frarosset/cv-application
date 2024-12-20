import InputWithLabel from "./InputWithLabel.jsx";
import DateInputWithLabel from "../base/DateInputWithLabel.jsx";
import IntervalDateInputWithLabels from "../base/IntervalDateInputWithLabels.jsx";

function ArrayOfInputWithLabel({
  orderedInputProps,
  inputProps,
  item,
  setValueFor,
}) {
  return (
    <>
      {orderedInputProps.map((prop) => {
        if (inputProps[prop].type === "date-month-year") {
          return (
            <DateInputWithLabel
              key={prop}
              id={prop}
              name={prop}
              label={inputProps[prop].label}
              valueMonth={item[`${prop}Month`]}
              valueYear={item[`${prop}Year`]}
              setMonth={setValueFor(`${prop}Month`)}
              setYear={setValueFor(`${prop}Year`)}
              firstYear={inputProps[prop].firstYear}
              firstMonth={inputProps[prop].firstMonth}
              lastYear={inputProps[prop].lastYear}
              lastMonth={inputProps[prop].lastMonth}
              required={inputProps[prop].required}
            />
          );
        } else if (inputProps[prop].type === "date-month-year-interval") {
          return (
            <IntervalDateInputWithLabels
              key={prop}
              fromDateProp={inputProps[prop].fromDateProp}
              toDateProp={inputProps[prop].toDateProp}
              {...{ item, inputProps, setValueFor }}
            />
          );
        } else {
          return (
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
          );
        }
      })}
    </>
  );
}

export default ArrayOfInputWithLabel;
