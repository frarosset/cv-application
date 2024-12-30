import Icon from "./Icon.jsx";
import Text from "./Text.jsx";
import "../../styles/base/TextWithIcon.css";

function TextWithIcon({ iconName, value, customClass = "" }) {
  return (
    <div className={`text-with-icon ${customClass}`}>
      <Icon {...iconName} />
      <Text customClass={customClass} value={value} />
    </div>
  );
}

export default TextWithIcon;
