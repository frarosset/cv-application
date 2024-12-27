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
import inputProperties from "../../data/inputProperties.json";
import "../../styles/editor/EditSectionPanel.css";

const orderedInputProps = ["heading", "text"];
const inputProps = inputProperties.skills;

function EditSkillsPanel({ skills, setSkills }) {
  const [currentItemId, setCurrentItemId] = useState(null);

  const showForm = currentItemId != null;
  let currentItem = getItem(skills, ["byId", currentItemId]);
  if (typeof currentItem !== "object") currentItem = {};
  const isEmptyItem = Object.keys(currentItem).length === 0;
  const emptyItemClass = isEmptyItem && "empty-item";

  const deleteItemCallback = () =>
    deleteItem(
      currentItemId,
      setSkills,
      setCurrentItemId,
      ["allIds"],
      ["byId"]
    );
  const moveItemBackCallback = () =>
    moveItemBy(currentItemId, -1, setSkills, ["allIds"], ["byId"]);
  const moveItemForthCallback = () =>
    moveItemBy(currentItemId, 1, setSkills, ["allIds"], ["byId"]);

  const setValueForCallback = (prop) =>
    setValueForSetter(
      currentItemId,
      prop,
      setSkills,
      setCurrentItemId,
      ["allIds"],
      ["byId"]
    );

  return (
    <div className={`edit-section-panel edit-skills-panel ${emptyItemClass}`}>
      <h3>Edit Skills</h3>
      <div>
        <EditListSelectionButtons
          list={skills.allIds}
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
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default EditSkillsPanel;
