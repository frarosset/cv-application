import TextWithIcon from "./TextWithIcon.jsx";
import "../../styles/base/AnchorWithTextWithIcon.css";

function AnchorWithTextWithIcon({
  iconName,
  value,
  customClass = "",
  url = "#",
  target = "_blank",
}) {
  return (
    // <div }>
    <a
      href={url}
      target={target}
      className={`anchor-text-with-icon ${customClass}`}
    >
      <TextWithIcon
        {...{
          iconName,
          value,
          customClass,
        }}
      />
    </a>
    // </div>
  );
}

export default AnchorWithTextWithIcon;
