import PreviewItemWithTextOnly from "./PreviewItemWithTextOnly.jsx";
import "../../styles/preview/PreviewListWithTextOnly.css";

function PreviewListWithTextOnly({ data, customClass, textProperties }) {
  return (
    <ul className={`preview-list-with-text-only ${customClass}`}>
      {data.map((itemData) => (
        <PreviewItemWithTextOnly
          key={itemData.id}
          customClass={customClass}
          itemData={itemData}
          textProperties={textProperties}
        />
      ))}
    </ul>
  );
}

export default PreviewListWithTextOnly;
