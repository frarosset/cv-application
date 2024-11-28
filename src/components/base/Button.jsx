import Icon from "./Icon.jsx";

function Button({ customCssClass, iconName, text, onClickCallback }) {
  const icon = iconName != null && <Icon name={iconName} />;

  return (
    <button className={`button ${customCssClass}`} onClick={onClickCallback}>
      {icon}
      {text}
    </button>
  );
}

export default Button;
