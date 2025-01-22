import { useState } from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import CreditFooter from "./components/base/CreditFooter.jsx";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [darkThemeSet, setDarkThemeSet] = useState(defaultDark);

  return (
    <>
      <div className={`app-container ${darkThemeSet ? "dark-theme" : ""}`}>
        <Header {...{ darkThemeSet, setDarkThemeSet }} />
        <Main />
        <CreditFooter darkTheme={darkThemeSet} />
      </div>
    </>
  );
}

export default App;
