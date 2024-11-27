import PreviewItemWithDates from "./PreviewItemWithDates.jsx";

function PreviewListWithDates({ data, customClass, textProperties }) {
  return (
    <ul className={`preview-list-with-dates ${customClass}`}>
      {data.map((itemData) => (
        <PreviewItemWithDates
          key={itemData.id}
          customClass={customClass}
          itemData={itemData}
          textProperties={textProperties}
        />
      ))}
    </ul>
  );
}

export default PreviewListWithDates;
