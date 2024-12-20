import { useState } from "react";
import EditListSelectionButtons from "./EditListSelectionButtons.jsx";
import EditItemPositionInList from "./EditItemPositionInList.jsx";
import {
  getItem,
  deleteItem,
  moveItemBy,
  setValueFor,
} from "../helper/itemsArrayManagement.js";
import ArrayOfInputWithLabel from "../base/ArrayOfInputWithLabel.jsx";
import inputProperties from "../../data/inputProperties.json";
import "../../styles/editor/EditSectionPanel.css";

const orderedInputProps = ["degree", "institution", "address", "fromToDate"];
const inputProps = inputProperties.education;

function EditEducationPanel({ education, setEducation }) {
  const [currentItemId, setCurrentItemId] = useState(null);

  const showForm = currentItemId != null;
  const currentItem = getItem(currentItemId, education);
  const isEmptyItem = Object.keys(currentItem).length === 0;
  const emptyItemClass = isEmptyItem && "empty-item";

  const deleteItemCallback = () =>
    deleteItem(currentItemId, education, setEducation, setCurrentItemId);
  const moveItemBackCallback = () =>
    moveItemBy(currentItemId, -1, education, setEducation);
  const moveItemForthCallback = () =>
    moveItemBy(currentItemId, 1, education, setEducation);

  const setValueForCallback = (prop) =>
    setValueFor(currentItemId, prop, education, setEducation, setCurrentItemId);

  return (
    <div
      className={`edit-section-panel edit-education-panel ${emptyItemClass}`}
    >
      <h3>Edit Education</h3>
      <EditListSelectionButtons
        list={education}
        currentItemId={currentItemId}
        setCurrentItemId={setCurrentItemId}
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
          </form>
        </>
      )}
    </div>
  );
}

export default EditEducationPanel;
