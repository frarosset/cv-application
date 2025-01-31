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

const orderedInputProps = [
  "name",
  "issuer",
  "address",
  "",
  "date",
  "",
  "description",
];
const inputProps = inputProperties.coursesAndCertificates;

function EditCoursesAndCertificatesPanel({
  coursesAndCertificates,
  setCoursesAndCertificates,
}) {
  const [currentItemId, setCurrentItemId] = useState(
    coursesAndCertificates.allIds.length
      ? coursesAndCertificates.allIds[0]
      : null
  );

  const showForm = currentItemId != null;
  let currentItem = getItem(coursesAndCertificates, ["byId", currentItemId]);
  if (typeof currentItem !== "object") currentItem = {};
  const isEmptyItem = Object.keys(currentItem).length === 0;
  const emptyItemClass = isEmptyItem && "empty-item";

  const newItemCallback = () =>
    addNewItem(
      setCoursesAndCertificates,
      setCurrentItemId,
      {},
      ["allIds"],
      ["byId"]
    );
  const deleteItemCallback = () =>
    deleteItem(
      currentItemId,
      setCoursesAndCertificates,
      setCurrentItemId,
      ["allIds"],
      ["byId"]
    );
  const moveItemBackCallback = () =>
    moveItemBy(
      currentItemId,
      -1,
      setCoursesAndCertificates,
      ["allIds"],
      ["byId"]
    );
  const moveItemForthCallback = () =>
    moveItemBy(
      currentItemId,
      1,
      setCoursesAndCertificates,
      ["allIds"],
      ["byId"]
    );

  const setValueForCallback = (prop) =>
    setValueForSetter(
      currentItemId,
      prop,
      setCoursesAndCertificates,
      setCurrentItemId,
      ["allIds"],
      ["byId"]
    );

  return (
    <div
      className={`edit-section-panel edit-coursesAndCertificates-panel ${emptyItemClass}`}
    >
      <h3>Edit Courses & Certificates</h3>
      <div>
        <EditListSelectionButtons
          list={coursesAndCertificates.allIds}
          getLabel={(id) => coursesAndCertificates.byId[id].name}
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

export default EditCoursesAndCertificatesPanel;
