import "../styles/Header.css";
import ToggleDarkThemeButton from "./functionalities/ToggleDarkThemeButton.jsx";

function Header({ darkThemeSet, setDarkThemeSet }) {
  return (
    <header>
      <h1>CV Application</h1>
      <div className="group-of-btns">
        <ToggleDarkThemeButton {...{ darkThemeSet, setDarkThemeSet }} />
      </div>
    </header>
  );
}

export default Header;
