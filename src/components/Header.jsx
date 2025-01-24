import "../styles/Header.css";
import ToggleDarkThemeButton from "./functionalities/ToggleDarkThemeButton.jsx";
import DropDownMenu from "./base/DropDownMenu.jsx";

function Header({ darkThemeSet, setDarkThemeSet }) {
  return (
    <header>
      <DropDownMenu>
        <button>Placeholder button</button>
        <button>Placeholder button</button>
      </DropDownMenu>
      <h1>CV Application</h1>
      <div className="group-of-btns">
        <ToggleDarkThemeButton {...{ darkThemeSet, setDarkThemeSet }} />
      </div>
    </header>
  );
}

export default Header;
