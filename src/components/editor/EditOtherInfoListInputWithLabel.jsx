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
import "../../styles/editor/EditOtherInfoListInputWithLabel.css";

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
    <div className={`editor-other-info ${emptyItemClass}`}>
      <div className={"editor-other-info-selection"}>
        <h4>Other info</h4>
        <EditListSelectionButtons
          list={otherInfo.allIds}
          getLabel={(id) => {
            const heading = otherInfo.byId[id].heading;
            const text = otherInfo.byId[id].text;
            return `${heading ? heading + ": " : ""}${text ? text : ""}`;
          }}
          currentItemId={currentItemId}
          setCurrentItemId={setCurrentItemId}
          emptyListText={"(empty)"}
        />
      </div>
      {showForm && (
        <>
          <div className={"editor-other-info-heading"}>
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
            <EditItemPositionInList
              {...{
                deleteItemCallback,
                moveItemBackCallback,
                moveItemForthCallback,
              }}
            />
          </div>
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
