import { useState } from "react";
import {
  getItem,
  deleteItem,
  moveItemBy,
  setValueForSetter,
} from "../helper/itemsArrayManagement.js";
import InputWithLabel from "../base/InputWithLabel.jsx";
import EditListSelectionButtons from "./EditListSelectionButtons.jsx";
import EditItemPositionInList from "./EditItemPositionInList.jsx";

function EditOtherInfoListInputWithLabel({
  inputProps,
  otherInfo = { byId: {}, allIds: [] },
  setState,
  pathInState,
}) {
  const [currentItemId, setCurrentItemId] = useState(null);

  const otherInfoHeadingProp = inputProps.otherInfo.heading;
  const otherInfoTextProp = inputProps.otherInfo.text;

  const showForm = currentItemId != null;
  let currentItem = getItem(otherInfo, ["byId", currentItemId]);
  if (typeof currentItem !== "object") currentItem = {};
  const info = currentItem;
  const isEmptyItem = Object.keys(currentItem).length === 0;
  const emptyItemClass = isEmptyItem ? "empty-item" : "";

  const allIdsPath = [...pathInState, "allIds"];
  const byIdPath = [...pathInState, "byId"];

  const deleteItemCallback = () =>
    deleteItem(currentItemId, setState, setCurrentItemId, allIdsPath, byIdPath);
  const moveItemBackCallback = () =>
    moveItemBy(currentItemId, -1, setState, allIdsPath, byIdPath);
  const moveItemForthCallback = () =>
    moveItemBy(currentItemId, 1, setState, allIdsPath, byIdPath);

  const setValueForCallback = (prop) =>
    setValueForSetter(
      currentItemId,
      prop,
      setState,
      setCurrentItemId,
      allIdsPath,
      byIdPath
    );

  return (
    <div className={`other-info ${emptyItemClass}`}>
      <div className={"other-info-info-selection"}>
        <p>Other info</p>
        <EditListSelectionButtons
          list={otherInfo.allIds}
          currentItemId={currentItemId}
          setCurrentItemId={setCurrentItemId}
          emptyListText={"Insert other info"}
        />
      </div>
      {showForm && (
        <>
          <EditItemPositionInList
            {...{
              deleteItemCallback,
              moveItemBackCallback,
              moveItemForthCallback,
            }}
          />
          <InputWithLabel
            id={`${otherInfoHeadingProp}-${info.id}`}
            name={`${otherInfoHeadingProp}-${info.id}`}
            label={inputProps[otherInfoHeadingProp].text}
            value={info[inputProps[otherInfoHeadingProp].prop]}
            placeholder={inputProps[otherInfoHeadingProp].placeholder}
            setValue={(val) => {
              setValueForCallback(inputProps[otherInfoHeadingProp].prop)(val);
            }}
            type={inputProps[otherInfoHeadingProp].type}
            maxLength={inputProps[otherInfoHeadingProp].maxLength}
            required={inputProps[otherInfoHeadingProp].required}
          />
          <InputWithLabel
            id={`${otherInfoTextProp}-${info.id}`}
            name={`${otherInfoTextProp}-${info.id}`}
            label={inputProps[otherInfoTextProp].text}
            value={info[inputProps[otherInfoTextProp].prop]}
            placeholder={inputProps[otherInfoTextProp].placeholder}
            setValue={(val) => {
              setValueForCallback(inputProps[otherInfoTextProp].prop)(val);
            }}
            type={inputProps[otherInfoTextProp].type}
            maxLength={inputProps[otherInfoTextProp].maxLength}
            required={inputProps[otherInfoTextProp].required}
          />
        </>
      )}
    </div>
  );
}

export default EditOtherInfoListInputWithLabel;