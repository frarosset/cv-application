import Button from "../base/Button.jsx";

// The whole website is set to print only the .preview-page div
// see: https://dev.to/amruthpillai/avoiding-awkward-element-breaks-in-print-html-5goe

function ToggleDarkThemeButton({ darkThemeSet, setDarkThemeSet }) {
  return (
    <Button
      customCssClass={"dark-theme-btn functionality-btn"}
      iconName={darkThemeSet ? "sun" : "moon"}
      onClickCallback={() => {
        setDarkThemeSet((val) => !val);
      }}
    />
  );
}

export default ToggleDarkThemeButton;
