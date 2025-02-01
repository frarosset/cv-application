import EditListSelectionButtons from "./EditListSelectionButtons.jsx";
import EditItemPositionInList from "./EditItemPositionInList.jsx";
import ArrayOfInputWithLabel from "../base/ArrayOfInputWithLabel.jsx";
import EditOtherInfoListInputWithLabel from "./EditOtherInfoListInputWithLabel.jsx";
import inputProperties from "../../data/inputProperties.json";
import "../../styles/editor/EditSectionPanel.css";
import useCurrentItemOfArray from "../../customHooks/useCurrentItemOfArray.js";

const orderedInputProps = [
  "degree",
  "institution",
  "address",
  "",
  "fromToDate",
  "",
];
const inputProps = inputProperties.education;

function EditEducationPanel({ education, setEducation }) {
  const itemData = useCurrentItemOfArray(
    education,
    setEducation,
    ["allIds"],
    ["byId"]
  );

  return (
    <div
      className={`edit-section-panel edit-education-panel ${itemData.emptyItemClass}`}
    >
      <h3>Edit Education</h3>
      <div>
        <EditListSelectionButtons
          list={education.allIds}
          getLabel={(id) => education.byId[id].degree}
          currentItemId={itemData.currentItemId}
          setCurrentItemId={itemData.setCurrentItemId}
          emptyListText={"Insert new items"}
          newItemCallback={itemData.newItemCallback}
        />

        {itemData.validItem && (
          <>
            <EditItemPositionInList
              deleteItemCallback={itemData.deleteItemCallback}
              moveItemBackCallback={itemData.moveItemBackCallback}
              moveItemForthCallback={itemData.moveItemForthCallback}
            />
            <form>
              <ArrayOfInputWithLabel
                {...{ orderedInputProps, inputProps }}
                item={itemData.currentItem}
                setValueFor={itemData.setValueForCallback}
              />
              {!itemData.isEmptyItem && (
                <EditOtherInfoListInputWithLabel
                  inputProps={inputProps}
                  otherInfo={itemData.currentItem.otherInfo}
                  setState={setEducation}
                  pathInState={["byId", itemData.currentItemId, "otherInfo"]}
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
