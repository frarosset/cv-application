import Button from "../base/Button.jsx";

function LoadSampleDataButton({ loadSampleDataCallback, showText = false }) {
  return (
    <Button
      customCssClass={"load-sample-data-btn functionality-btn"}
      iconName={"fileText"}
      text={showText && "Load sample data"}
      onClickCallback={loadSampleDataCallback}
    />
  );
}

export default LoadSampleDataButton;
