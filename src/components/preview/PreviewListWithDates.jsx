import PreviewItemWithDates from "./PreviewItemWithDates.jsx";
import "../../styles/preview/PreviewListWithDates.css";

function PreviewListWithDates({
  data,
  customClass,
  textProperties,
  typeOfDates = "interval",
}) {
  return (
    <ul className={`preview-list-with-dates ${customClass}`}>
      {data.allIds.map((id) => (
        <PreviewItemWithDates
          key={id}
          customClass={customClass}
          itemData={data.byId[id]}
          textProperties={textProperties}
          typeOfDates={typeOfDates}
        />
      ))}
    </ul>
  );
}

export default PreviewListWithDates;
