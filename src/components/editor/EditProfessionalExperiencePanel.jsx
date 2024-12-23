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

const orderedInputProps = ["role", "institution", "address", "fromToDate"];
const inputProps = inputProperties.professionalExperience;

function EditProfessionalExperience({
  professionalExperience,
  setProfessionalExperience,
}) {
  const [currentItemId, setCurrentItemId] = useState(null);

  const showForm = currentItemId != null;
  let currentItem = getItem(professionalExperience, ["byId", currentItemId]);
  if (typeof currentItem !== "object") currentItem = {};
  const isEmptyItem = Object.keys(currentItem).length === 0;
  const emptyItemClass = isEmptyItem && "empty-item";

  const deleteItemCallback = () =>
    deleteItem(
      currentItemId,
      setProfessionalExperience,
      setCurrentItemId,
      ["allIds"],
      ["byId"]
    );
  const moveItemBackCallback = () =>
    moveItemBy(
      currentItemId,
      -1,
      setProfessionalExperience,
      ["allIds"],
      ["byId"]
    );
  const moveItemForthCallback = () =>
    moveItemBy(
      currentItemId,
      1,
      setProfessionalExperience,
      ["allIds"],
      ["byId"]
    );

  const setValueForCallback = (prop) =>
    setValueForSetter(
      currentItemId,
      prop,
      setProfessionalExperience,
      setCurrentItemId,
      ["allIds"],
      ["byId"]
    );

  return (
    <div
      className={`edit-section-panel edit-professional-experience-panel ${emptyItemClass}`}
    >
      <h3>Edit Professional Experience</h3>

      <div>
        <EditListSelectionButtons
          list={professionalExperience.allIds}
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
                  setState={setProfessionalExperience}
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

export default EditProfessionalExperience;
