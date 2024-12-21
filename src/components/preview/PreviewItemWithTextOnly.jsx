import Text from "../base/Text.jsx";
import "../../styles/preview/PreviewItemWithTextOnly.css";

function PreviewItemWithTextOnly({ itemData, customClass, textProperties }) {
  return (
    <li className={`preview-item-with-text-only ${customClass}`}>
      <div className={`preview-item-with-text-only-text-blocks`}>
        {textProperties.map((prop) => (
          <Text key={prop} customClass={prop} value={itemData[prop]} />
        ))}
      </div>
    </li>
  );
}

export default PreviewItemWithTextOnly;
