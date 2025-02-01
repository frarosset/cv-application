import { useState, useRef } from "react";
import useIsOverflow from "../customHooks/useIsOverflow.js";
import EditPanel from "./editor/EditPanel.jsx";
import PreviewPanel from "./preview/PreviewPanel.jsx";
import PrintButton from "./functionalities/PrintButton.jsx";
import DownloadButton from "./functionalities/DownloadButton.jsx";
import TogglePreviewEditViewButton from "./functionalities/TogglePreviewEditViewButton.jsx";
import "../styles/Main.css";

const hasOVerflowXCssClass = "has-overflow-y";
const previewViewCssClass = "preview-view";

const isOverflowXPreCallback = (ref) => {
  // before checking the overflow condition, revert to the base layout
  if (ref) {
    ref.current.classList.toggle(hasOVerflowXCssClass, false);
  }
};

const isOverflowXPostCallback = (ref, hasOverflowX) => {
  // after checking the overflow condition, apply the hasOVerflowXCssClass if necessary
  ref.current.classList.toggle(hasOVerflowXCssClass, hasOverflowX);
};

function Main({
  dataStateProps,
  dataSetStateProps,
  downloadOptions,
  currentPanel,
  setCurrentPanel,
}) {
  /* *************************************************************************** */
  // A base layout style might be  specified. This is used to set a hasOVerflowXCssClass
  // css class whenever the base layout overflows horizontally, which can have a
  // different style
  // See "../customHooks/useIsOverflow.js" for more details

  const ref = useRef();

  const isOverflow = useIsOverflow(
    ref,
    false,
    isOverflowXPostCallback,
    isOverflowXPreCallback
  );
  /* *************************************************************************** */

  const [previewView, setPreviewView] = useState();

  return (
    <main
      ref={ref}
      className={
        isOverflow
          ? `${hasOVerflowXCssClass} ${previewView ? previewViewCssClass : ""}`
          : ""
      }
    >
      <EditPanel
        {...{
          ...dataStateProps,
          ...dataSetStateProps,
          currentPanel,
          setCurrentPanel,
        }}
      />
      <PreviewPanel {...dataStateProps} />
      <div className="group-of-btns">
        {isOverflow && (
          <TogglePreviewEditViewButton {...{ previewView, setPreviewView }} />
        )}
        <PrintButton />
        <DownloadButton {...{ ...downloadOptions }} />
      </div>
    </main>
  );
}

export default Main;
