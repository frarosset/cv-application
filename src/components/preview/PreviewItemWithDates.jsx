import Text from "../base/Text.jsx";
import PreviewListWithTextOnly from "./PreviewListWithTextOnly.jsx";
import "../../styles/preview/PreviewItemWithDates.css";

function PreviewItemWithDates({
  itemData,
  customClass,
  textProperties,
  typeOfDates = "interval",
}) {
  const datesValue = getDatesStr(itemData, typeOfDates);
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

function getDatesStr(
  {
    dateYear,
    dateMonth,
    fromDateYear,
    fromDateMonth,
    toDateYear,
    toDateMonth,
    ongoing,
  },
  typeOfDates
) {
  if (typeOfDates == "single") {
    // one date only
    return ongoing ? "ongoing" : getDateStr(dateYear, dateMonth);
  } else if (typeOfDates == "interval") {
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
