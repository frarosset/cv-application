import PreviewItemWithTextOnly from "./PreviewItemWithTextOnly.jsx";
import "../../styles/preview/PreviewListWithTextOnly.css";

function PreviewListWithTextOnly({ data, customClass, textProperties }) {
  return (
    <ul className={`preview-list-with-text-only ${customClass}`}>
      {data.allIds.map((id) => (
        <PreviewItemWithTextOnly
          key={id}
          customClass={customClass}
          itemData={data.byId[id]}
          textProperties={textProperties}
        />
      ))}
    </ul>
  );
}

export default PreviewListWithTextOnly;
