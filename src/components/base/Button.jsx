import Icon from "./Icon.jsx";
import "../../styles/base/Button.css";

function Button({
  customCssClass,
  iconName,
  text,
  onClickCallback,
  type = "button",
}) {
  const icon = iconName != null && <Icon name={iconName} />;

  return (
    <button
      className={`button ${customCssClass}`}
      onClick={onClickCallback}
      type={type}
    >
      {icon}
      {text}
    </button>
  );
}

export default Button;
