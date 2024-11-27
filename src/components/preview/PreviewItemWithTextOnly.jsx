import Text from "../base/Text.jsx";
import "../../styles/preview/PreviewItemWithTextOnly.css";

function PreviewItemWithTextOnly({ itemData, customClass }) {
  return (
    <li className={`preview-item-with-text-only ${customClass}`}>
      <div className={`preview-item-with-text-only-text-blocks ${customClass}`}>
        <Text customClass={`${customClass} heading`} value={itemData.heading} />
        <Text customClass={customClass} value={itemData.text} />
      </div>
    </li>
  );
}

export default PreviewItemWithTextOnly;
