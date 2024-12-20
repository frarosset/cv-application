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

function DateInputWithLabel({
  id,
  name,
  valueMonth,
  valueYear,
  setMonth,
  setYear,
  required = false,
  label,
  fromMonth,
  fromYear,
  toMonth,
  toYear,
  disabled,
}) {
  const idMonth = `${id}Month`;
  const idYear = `${id}Year`;
  const nameMonth = `${name}Month`;
  const nameYear = `${name}Year`;

  const { firstYear, lastYear, firstMonth, lastMonth } = computeConstraints(
    valueMonth,
    valueYear,
    fromMonth,
    fromYear,
    toMonth,
    toYear
  );

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
      disabled={disabled}
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
      disabled={disabled}
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

function computeConstraints(
  valueMonth,
  valueYear,
  fromMonth,
  fromYear,
  toMonth,
  toYear
) {
  const isToMonthAntecedent = getMonthIdx(valueMonth) > getMonthIdx(toMonth);
  const isFromMonthConsequent =
    getMonthIdx(fromMonth) > getMonthIdx(valueMonth);

  const firstYear =
    (fromYear != null ? Number(fromYear) : 1900) +
    (isFromMonthConsequent ? 1 : 0);
  const lastYear =
    (toYear != null ? Number(toYear) : new Date().getFullYear()) -
    (isToMonthAntecedent ? 1 : 0);

  const isFirstYear =
    valueYear != null && valueYear == firstYear && !isFromMonthConsequent;
  const isLastYear =
    valueYear != null && valueYear == lastYear && !isToMonthAntecedent;

  const firstMonth = isFirstYear && fromMonth ? fromMonth : months[0];
  const lastMonth = isLastYear && toMonth ? toMonth : months[months.length - 1];

  return {
    firstYear,
    lastYear,
    firstMonth,
    lastMonth,
  };
}

function range(start, end, step = 1) {
  const length = Math.floor((end - start) / step) + 1;
  // see https://stackoverflow.com/a/28247338
  return Array.from({ length }, (v, k) => start + k * step);
}

// this is to get the index of the months in O(1), avoiding a .findIndex() call
const monthsIdxMap = new Map();
months.forEach((key, idx) => monthsIdxMap.set(key, idx));

function getMonthIdx(month) {
  return monthsIdxMap.get(month);
}

function optionsMonth(firstMonth, lastMonth) {
  const firstMonthIdx = getMonthIdx(firstMonth);
  const lastMonthIdx = getMonthIdx(lastMonth);

  const sliceFrom = firstMonthIdx ? firstMonthIdx : 0;
  /* sliceTo includes the +1 to point to the exclusive last item to select */
  const sliceTo = lastMonthIdx ? lastMonthIdx + 1 : months.length;

  return months.slice(sliceFrom, sliceTo);
}

function optionsYear(firstYear, lastYear) {
  return [...range(lastYear, firstYear, -1)];
}

export default DateInputWithLabel;
