import { useState } from "react";
import EditListSelectionButtons from "./EditListSelectionButtons.jsx";
import EditItemPositionInList from "./EditItemPositionInList.jsx";
import {
  getItem,
  deleteItem,
  moveItemBy,
  setValueForSetter,
} from "../helper/itemsArrayManagement.js";
import ArrayOfInputWithLabel from "../base/ArrayOfInputWithLabel.jsx";
import EditOtherInfoListInputWithLabel from "./EditOtherInfoListInputWithLabel.jsx";
import inputProperties from "../../data/inputProperties.json";
import "../../styles/editor/EditSectionPanel.css";

const orderedInputProps = ["degree", "institution", "address", "fromToDate"];
const inputProps = inputProperties.education;

function EditEducationPanel({ education, setEducation }) {
  const [currentItemId, setCurrentItemId] = useState(
    education.allIds.length ? education.allIds[0] : null
  );

  const showForm = currentItemId != null;
  let currentItem = getItem(education, ["byId", currentItemId]);
  if (typeof currentItem !== "object") currentItem = {};
  const isEmptyItem = Object.keys(currentItem).length === 0;
  const emptyItemClass = isEmptyItem && "empty-item";

  const deleteItemCallback = () =>
    deleteItem(
      currentItemId,
      setEducation,
      setCurrentItemId,
      ["allIds"],
      ["byId"]
    );
  const moveItemBackCallback = () =>
    moveItemBy(currentItemId, -1, setEducation, ["allIds"], ["byId"]);
  const moveItemForthCallback = () =>
    moveItemBy(currentItemId, 1, setEducation, ["allIds"], ["byId"]);

  const setValueForCallback = (prop) =>
    setValueForSetter(
      currentItemId,
      prop,
      setEducation,
      setCurrentItemId,
      ["allIds"],
      ["byId"]
    );

  return (
    <div
      className={`edit-section-panel edit-education-panel ${emptyItemClass}`}
    >
      <h3>Edit Education</h3>
      <div>
        <EditListSelectionButtons
          list={education.allIds}
          getLabel={(id) => education.byId[id].degree}
          currentItemId={currentItemId}
          setCurrentItemId={setCurrentItemId}
          emptyListText={"Insert new items"}
        />

        {showForm && (
          <>
            <EditItemPositionInList
              {...{
                deleteItemCallback,
                moveItemBackCallback,
                moveItemForthCallback,
              }}
            />
            <form>
              <ArrayOfInputWithLabel
                {...{ orderedInputProps, inputProps }}
                item={currentItem}
                setValueFor={setValueForCallback}
              />
              {!isEmptyItem && (
                <EditOtherInfoListInputWithLabel
                  inputProps={inputProps}
                  otherInfo={currentItem.otherInfo}
                  setState={setEducation}
                  pathInState={["byId", currentItemId, "otherInfo"]}
                />
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default EditEducationPanel;
