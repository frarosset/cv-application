import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import CreditFooter from "./components/base/CreditFooter.jsx";
import useDefineDataStates from "./customHooks/useDefineDataStates.js";

function App() {
  const { dataStateProps, dataSetStateProps, darkThemeSet, setDarkThemeSet } =
    useDefineDataStates();

  return (
    <>
      <div className={`app-container ${darkThemeSet ? "dark-theme" : ""}`}>
        <Header {...{ darkThemeSet, setDarkThemeSet }} />
        <Main {...{ dataStateProps, dataSetStateProps }} />
        <CreditFooter darkTheme={darkThemeSet} />
      </div>
    </>
  );
}

export default App;
