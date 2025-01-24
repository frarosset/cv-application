import "../styles/Header.css";
import ToggleDarkThemeButton from "./functionalities/ToggleDarkThemeButton.jsx";
import DropDownMenu from "./base/DropDownMenu.jsx";
import ClearDataButton from "./functionalities/ClearDataButton.jsx";

function Header({ darkThemeSet, setDarkThemeSet, setBlankData }) {
  return (
    <header>
      <DropDownMenu>
        <ClearDataButton clearDataCallback={setBlankData} showText={true} />
      </DropDownMenu>
      <h1>CV Application</h1>
      <div className="group-of-btns">
        <ToggleDarkThemeButton {...{ darkThemeSet, setDarkThemeSet }} />
      </div>
    </header>
  );
}

export default Header;
