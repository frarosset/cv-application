import Icon from "./Icon.jsx";
import "../../styles/base/Button.css";

function Button({
  customCssClass,
  iconName,
  text,
  onClickCallback,
  onFocusCallback,
  onBlurCallback,
  type = "button",
}) {
  const icon = iconName != null && <Icon name={iconName} />;

  return (
    <button
      className={`button ${customCssClass}`}
      onClick={onClickCallback}
      onFocus={onFocusCallback}
      onBlur={onBlurCallback}
      type={type}
    >
      {icon}
      {text}
    </button>
  );
}

export default Button;
