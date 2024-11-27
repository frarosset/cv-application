import Text from "../base/Text.jsx";
import "../../styles/preview/PreviewItemWithDates.css";

function PreviewItemWithDates({ itemData, customClass, textProperties }) {
  const datesValue = getDatesStr(itemData);

  return (
    <li className={`preview-item-with-dates ${customClass}`}>
      {textProperties.map((prop) => (
        <Text key={prop} customClass={prop} value={itemData[prop]} />
      ))}
      <Text key={"dates"} customClass={"dates"} value={datesValue} />
    </li>
  );
}

function getDatesStr({
  fromDateYear,
  fromDateMonth,
  toDateYear,
  toDateMonth,
  ongoing,
}) {
  const fromDateStr = getDateStr(fromDateYear, fromDateMonth);
  const toDateStr = ongoing ? "present" : getDateStr(toDateYear, toDateMonth);
  return `${fromDateStr} - ${toDateStr}`;
}

function getDateStr(year, month = "") {
  return `${month || ""} ${year}`;
}

export default PreviewItemWithDates;
