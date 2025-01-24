import Button from "../base/Button.jsx";

function ClearDataButton({ clearDataCallback, showText = false }) {
  return (
    <Button
      customCssClass={"clear-data-btn functionality-btn"}
      iconName={"file"}
      text={showText && "Clear data"}
      onClickCallback={clearDataCallback}
    />
  );
}

export default ClearDataButton;
