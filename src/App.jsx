import { useEffect } from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import CreditFooter from "./components/base/CreditFooter.jsx";
import useDefineDataStates from "./customHooks/useDefineDataStates.js";

function App() {
  const {
    dataStateProps,
    dataSetStateProps,
    darkThemeSet,
    setDarkThemeSet,
    setBlankData,
    setSampleData,
  } = useDefineDataStates();

  /* set page title */
  const titleStr = getTitleStr(
    dataStateProps.personalInfo.name,
    dataStateProps.personalInfo.surname
  );
  useEffect(() => {
    document.title = titleStr;
  }, [titleStr]);

  /* set download options for jsPdf */
  const downloadOptions = {
    filename: titleStr,
    format: dataStateProps.personalization.format,
    fontFaces: [
      dataStateProps.personalization.mainFont,
      dataStateProps.personalization.headingFont,
      dataStateProps.personalization.accentFont,
      dataStateProps.personalization.detailFont,
      dataStateProps.personalization.fullNameFont,
      dataStateProps.personalization.titleFont,
    ],
  };

  return (
    <>
      <div className={`app-container ${darkThemeSet ? "dark-theme" : ""}`}>
        <Header
          {...{ darkThemeSet, setDarkThemeSet, setBlankData, setSampleData }}
        />
        <Main {...{ dataStateProps, dataSetStateProps, downloadOptions }} />
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
