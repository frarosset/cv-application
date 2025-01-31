import { useState } from "react";
import EditListSelectionButtons from "./EditListSelectionButtons.jsx";
import EditItemPositionInList from "./EditItemPositionInList.jsx";
import {
  getItem,
  deleteItem,
  moveItemBy,
  setValueForSetter,
  addNewItem,
} from "../helper/itemsArrayManagement.js";
import ArrayOfInputWithLabel from "../base/ArrayOfInputWithLabel.jsx";
import inputProperties from "../../data/inputProperties.json";
import "../../styles/editor/EditSectionPanel.css";

const orderedInputProps = ["heading", "text"];
const inputProps = inputProperties.languages;

function EditLanguagesPanel({ languages, setLanguages }) {
  const [currentItemId, setCurrentItemId] = useState(
    languages.allIds.length ? languages.allIds[0] : null
  );

  const showForm = currentItemId != null;
  let currentItem = getItem(languages, ["byId", currentItemId]);
  if (typeof currentItem !== "object") currentItem = {};
  const isEmptyItem = Object.keys(currentItem).length === 0;
  const emptyItemClass = isEmptyItem && "empty-item";

  const newItemCallback = () =>
    addNewItem(setLanguages, setCurrentItemId, {}, ["allIds"], ["byId"]);
  const deleteItemCallback = () =>
    deleteItem(
      currentItemId,
      setLanguages,
      setCurrentItemId,
      ["allIds"],
      ["byId"]
    );
  const moveItemBackCallback = () =>
    moveItemBy(currentItemId, -1, setLanguages, ["allIds"], ["byId"]);
  const moveItemForthCallback = () =>
    moveItemBy(currentItemId, 1, setLanguages, ["allIds"], ["byId"]);

  const setValueForCallback = (prop) =>
    setValueForSetter(
      currentItemId,
      prop,
      setLanguages,
      setCurrentItemId,
      ["allIds"],
      ["byId"]
    );

  return (
    <div
      className={`edit-section-panel edit-languages-panel ${emptyItemClass}`}
    >
      <h3>Edit Languages</h3>
      <div>
        <EditListSelectionButtons
          list={languages.allIds}
          getLabel={(id) => languages.byId[id].heading}
          currentItemId={currentItemId}
          setCurrentItemId={setCurrentItemId}
          emptyListText={"Insert new items"}
          newItemCallback={newItemCallback}
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
    </div>
  );
}

export default EditLanguagesPanel;
