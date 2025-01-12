import { useState } from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [darkThemeSet, setDarkThemeSet] = useState(defaultDark);

  return (
    <div className={`app-container ${darkThemeSet && "dark-theme"}`}>
      <Header {...{ darkThemeSet, setDarkThemeSet }} />
      <Main />
    </div>
  );
}

export default App;
