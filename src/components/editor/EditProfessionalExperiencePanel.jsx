import EditListSelectionButtons from "./EditListSelectionButtons.jsx";
import EditItemPositionInList from "./EditItemPositionInList.jsx";
import ArrayOfInputWithLabel from "../base/ArrayOfInputWithLabel.jsx";
import EditOtherInfoListInputWithLabel from "./EditOtherInfoListInputWithLabel.jsx";
import inputProperties from "../../data/inputProperties.json";
import "../../styles/editor/EditSectionPanel.css";
import useCurrentItemOfArray from "../../customHooks/useCurrentItemOfArray.js";

const orderedInputProps = [
  "role",
  "institution",
  "address",
  "",
  "fromToDate",
  "",
];
const inputProps = inputProperties.professionalExperience;

function EditProfessionalExperiencePanel({
  professionalExperience,
  setProfessionalExperience,
}) {
  const itemData = useCurrentItemOfArray(
    professionalExperience,
    setProfessionalExperience,
    ["allIds"],
    ["byId"]
  );

  return (
    <div
      className={`edit-section-panel edit-professional-experience-panel ${itemData.emptyItemClass}`}
    >
      <h3>Edit Professional Experience</h3>

      <div>
        <EditListSelectionButtons
          list={professionalExperience.allIds}
          getLabel={(id) => professionalExperience.byId[id].role}
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
                  setState={setProfessionalExperience}
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

export default EditProfessionalExperiencePanel;
