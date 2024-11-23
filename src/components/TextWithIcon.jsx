import Icon from "./Icon.jsx";
import Text from "./Text.jsx";

function TextWithIcon({ iconName, value, customClass = "" }) {
  return (
    <div className={`text-with-icon ${customClass}`}>
      <Icon name={iconName} />
      <Text customClass={customClass} value={value} />
    </div>
  );
}

export default TextWithIcon;
