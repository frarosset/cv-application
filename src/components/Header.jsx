import "../styles/Header.css";
import ToggleDarkThemeButton from "./functionalities/ToggleDarkThemeButton.jsx";
import DropDownMenu from "./base/DropDownMenu.jsx";
import ClearDataButton from "./functionalities/ClearDataButton.jsx";
import LoadSampleDataButton from "./functionalities/LoadSampleDataButton.jsx";
import DownloadButton from "./functionalities/DownloadButton.jsx";
import PrintButton from "./functionalities/PrintButton.jsx";

function Header({
  darkThemeSet,
  setDarkThemeSet,
  setBlankData,
  setSampleData,
  downloadOptions,
}) {
  return (
    <header>
      <DropDownMenu>
        <div className="space" />
        <ClearDataButton clearDataCallback={setBlankData} showText={true} />
        <LoadSampleDataButton
          loadSampleDataCallback={setSampleData}
          showText={true}
        />
        <DownloadButton {...{ ...downloadOptions }} showText={true} />
        <PrintButton showText={true} />
        <div className="space" />
      </DropDownMenu>
      <h1>CV Application</h1>
      <div className="group-of-btns">
        <ToggleDarkThemeButton {...{ darkThemeSet, setDarkThemeSet }} />
      </div>
    </header>
  );
}

export default Header;
