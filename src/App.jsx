import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import CreditFooter from "./components/base/CreditFooter.jsx";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [darkThemeSet, setDarkThemeSet] = useState(
    JSON.parse(localStorage.getItem("darkThemeSet")) || defaultDark
  );
  // Initialize effect to update values in Local Storage ----------------------
  useEffect(() => {
    localStorage.setItem("darkThemeSet", JSON.stringify(darkThemeSet));
  }, [darkThemeSet]);

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
