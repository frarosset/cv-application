import SelectInput from "./SelectInput.jsx";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const optionsMonth = (firstMonth, lastMonth) => {
  const firstMonthIdx = months.findIndex((month) => month === firstMonth);
  const lastMonthIdx = months.findIndex((month) => month === lastMonth);

  const sliceFrom = firstMonthIdx !== -1 ? firstMonthIdx : 0;
  /* sliceTo includes the +1 to point to the exclusive last item to select */
  const sliceTo = lastMonthIdx !== -1 ? lastMonthIdx + 1 : months.length;

  return months.slice(sliceFrom, sliceTo);
};

const optionsYear = (firstYear, lastYear) => {
  return [...range(lastYear, firstYear, -1)];
};

function DateInputWithLabel({
  id,
  name,
  valueMonth = "",
  valueYear = "",
  setMonth,
  setYear,
  firstYear = 1900,
  lastYear = new Date().getFullYear(),
  firstMonth = months[0],
  lastMonth = months[months.length - 1],
  required = false,
  label,
}) {
  const idMonth = `${id}Month`;
  const idYear = `${id}Year`;
  const nameMonth = `${name}Month`;
  const nameYear = `${name}Year`;

  const monthInput = (
    <SelectInput
      id={idMonth}
      name={nameMonth}
      value={valueMonth}
      options={optionsMonth(firstMonth, lastMonth)}
      emptyValue={""}
      setValue={setMonth}
      placeholder={"month"}
      required={required}
      aria-label={`${label} month`}
    />
  );

  const yearInput = (
    <SelectInput
      id={idYear}
      name={nameYear}
      value={valueYear}
      options={optionsYear(firstYear, lastYear)}
      setValue={setYear}
      placeholder={"year"}
      required={required}
      aria-label={`${label} year`}
    />
  );

  return (
    <div className="input-with-label date-input-with-label">
      <label htmlFor={idYear}>{label}</label>
      {monthInput}
      {yearInput}
    </div>
  );
}

function range(start, end, step = 1) {
  const length = Math.floor((end - start) / step) + 1;
  // see https://stackoverflow.com/a/28247338
  return Array.from({ length }, (v, k) => start + k * step);
}

export default DateInputWithLabel;
