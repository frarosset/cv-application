import { useRef, useEffect } from "react";
import useIsOverflow from "../customHooks/useIsOverflow.js";
import EditPanel from "./editor/EditPanel.jsx";
import PreviewPanel from "./preview/PreviewPanel.jsx";
import PrintButton from "./functionalities/PrintButton.jsx";
import DownloadButton from "./functionalities/DownloadButton.jsx";
import "../styles/Main.css";

const hasOVerflowXCssClass = "has-overflow-y";

function Main({ dataStateProps, dataSetStateProps }) {
  /* *************************************************************************** */
  // A base layout style might be  specified. This is used to set a hasOVerflowXCssClass
  // css class whenever the base layout overflows horizontally, which can have a
  // different style
  // See "../customHooks/useIsOverflow.js" for more details

  const ref = useRef();

  const isOverflowXPreCallback = () => {
    // before checking the overflow condition, revert to the base layout
    if (ref) ref.current.classList.toggle(hasOVerflowXCssClass, false);
  };

  const isOverflowXPostCallback = (hasOverflowX) => {
    // after checking the overflow condition, apply the hasOVerflowXCssClass if necessary
    ref.current.classList.toggle(hasOVerflowXCssClass, hasOverflowX);
  };

  useIsOverflow(ref, false, isOverflowXPostCallback, isOverflowXPreCallback);
  /* *************************************************************************** */

  const personalInfo = dataStateProps.personalInfo;
  const personalization = dataStateProps.personalization;

  /* set page title */
  useEffect(() => {
    const name = personalInfo.name ? personalInfo.name : "";
    const surname = personalInfo.surname ? personalInfo.surname : "";

    const fullName =
      name != "" ? (surname != "" ? `${name} ${surname}` : name) : surname;

    const titleStr = fullName != "" ? `CV of ${fullName}` : "CV Application";
    document.title = titleStr;
  }, [personalInfo.name, personalInfo.surname]);

  return (
    <main ref={ref}>
      <EditPanel {...{ ...dataStateProps, ...dataSetStateProps }} />
      <PreviewPanel {...dataStateProps} />
      <div className="group-of-btns">
        <PrintButton />
        <DownloadButton
          filename={`cv_of_${personalInfo.name}_${personalInfo.surname}`}
          format={personalization.format}
          fontFaces={[
            personalization.mainFont,
            personalization.headingFont,
            personalization.accentFont,
            personalization.detailFont,
            personalization.fullNameFont,
            personalization.titleFont,
          ]}
        />
      </div>
    </main>
  );
}

export default Main;
