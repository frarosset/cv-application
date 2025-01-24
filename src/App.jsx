import { useEffect } from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import CreditFooter from "./components/base/CreditFooter.jsx";
import useDefineDataStates from "./customHooks/useDefineDataStates.js";

function App() {
  const { dataStateProps, dataSetStateProps, darkThemeSet, setDarkThemeSet } =
    useDefineDataStates();

  /* set page title */
  const titleStr = getTitleStr(
    dataStateProps.personalInfo.name,
    dataStateProps.personalInfo.surname
  );
  useEffect(() => {
    document.title = titleStr;
  }, [titleStr]);

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

function getTitleStr(nameData, surnameData) {
  const name = nameData ? nameData : "";
  const surname = surnameData ? surnameData : "";

  const fullName =
    name != "" ? (surname != "" ? `${name} ${surname}` : name) : surname;

  return fullName != "" ? `CV of ${fullName}` : "CV Application";
}

export default App;
