import Text from "../base/Text.jsx";
import PreviewListWithTextOnly from "./PreviewListWithTextOnly.jsx";
import "../../styles/preview/PreviewItemWithDates.css";

function PreviewItemWithDates({ itemData, customClass, textProperties }) {
  const datesValue = getDatesStr(itemData);
  const otherInfo = itemData.otherInfo ? itemData.otherInfo : { allIds: [] };

  return (
    <li className={`preview-item-with-dates ${customClass}`}>
      {textProperties.map((prop) => {
        if (typeof prop === "string") {
          return <Text key={prop} customClass={prop} value={itemData[prop]} />;
        } else {
          const subpropStr = prop.join("-");
          return (
            <div key={subpropStr} className={subpropStr}>
              {prop.map((subprop) => (
                <Text
                  key={subprop}
                  customClass={subprop}
                  value={itemData[subprop]}
                />
              ))}
            </div>
          );
        }
      })}
      <Text key={"dates"} customClass={"dates"} value={datesValue} />

      {otherInfo.allIds.length > 0 && (
        <PreviewListWithTextOnly
          customClass={"other-info"}
          data={otherInfo}
          textProperties={["heading", "text"]}
        />
      )}
    </li>
  );
}

function getDatesStr({
  dateYear,
  dateMonth,
  fromDateYear,
  fromDateMonth,
  toDateYear,
  toDateMonth,
  ongoing,
}) {
  if ([dateYear, dateMonth].some((str) => str != null)) {
    // one date only
    return ongoing ? "ongoing" : getDateStr(dateYear, dateMonth);
  } else if (
    [fromDateYear, fromDateMonth, toDateYear, toDateMonth].some(
      (str) => str != null
    )
  ) {
    // interval of dates
    const fromDateStr = getDateStr(fromDateYear, fromDateMonth);
    const toDateStr = ongoing ? "present" : getDateStr(toDateYear, toDateMonth);
    return `${fromDateStr} - ${toDateStr}`;
  } else return "";
}

function getDateStr(year, month = "") {
  return `${month != null ? month : ""} ${year != null ? year : ""}`;
}

export default PreviewItemWithDates;
