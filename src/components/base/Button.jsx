import Icon from "./Icon.jsx";

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
