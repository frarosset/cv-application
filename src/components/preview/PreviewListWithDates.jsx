import PreviewItemWithDates from "./PreviewItemWithDates.jsx";
import "../../styles/preview/PreviewListWithDates.css";

function PreviewListWithDates({ data, customClass, textProperties }) {
  return (
    <ul className={`preview-list-with-dates ${customClass}`}>
      {data.allIds.map((id) => (
        <PreviewItemWithDates
          key={id}
          customClass={customClass}
          itemData={data.byId[id]}
          textProperties={textProperties}
        />
      ))}
    </ul>
  );
}

export default PreviewListWithDates;
