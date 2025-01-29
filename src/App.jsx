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
    pageTbPaddingInteger: dataStateProps.personalization.pageTbPadding,
  };

  return (
    <>
      <div
        className={`app-container ${darkThemeSet ? "dark-theme" : ""}`}
        onClickCapture={checkFormValidityCallback}
      >
        <Header
          {...{
            darkThemeSet,
            setDarkThemeSet,
            setBlankData,
            setSampleData,
            downloadOptions,
          }}
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

function checkFormValidityCallback(e) {
  const button = e.target.closest("button");

  const btnsToDisable = [
    "download-btn",
    "print-btn",
    "edit-panel-button",
    "edit-list-selection-new-item-button",
    "edit-list-selection-item-button",
  ];

  // if the clicked point is not a button, do nothing
  if (!button) return;

  // check if the button placed in the same position as the clicked point is
  // a button to be disabled under invalid form condition
  const isButtonToDisable = btnsToDisable.some((btnClass) =>
    button.classList.contains(btnClass)
  );
  if (!isButtonToDisable) return;

  // check validity of each form:
  // as soon as you find an invalid one, you must prevent the associated button to be executed
  const allForms = document.querySelectorAll("form");

  for (const form of allForms) {
    form.setAttribute("novalidate", true);

    if (!form.reportValidity()) {
      // if the form is not valid, do not continue propagating the event
      // (recall that capture is being considered here)
      // This prevents the events listeners in the buttons to be executed
      e.stopPropagation();
      return;
    }
  }
}

export default App;
