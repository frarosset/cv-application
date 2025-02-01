import EditListSelectionButtons from "./EditListSelectionButtons.jsx";
import EditItemPositionInList from "./EditItemPositionInList.jsx";
import ArrayOfInputWithLabel from "../base/ArrayOfInputWithLabel.jsx";
import inputProperties from "../../data/inputProperties.json";
import "../../styles/editor/EditSectionPanel.css";
import useCurrentItemOfArray from "../../customHooks/useCurrentItemOfArray.js";

const orderedInputProps = ["heading", "text"];
const inputProps = inputProperties.skills;

function EditSkillsPanel({ skills, setSkills }) {
  const itemData = useCurrentItemOfArray(
    skills,
    setSkills,
    ["allIds"],
    ["byId"]
  );

  return (
    <div
      className={`edit-section-panel edit-skills-panel ${itemData.emptyItemClass}`}
    >
      <h3>Edit Skills</h3>
      <div>
        <EditListSelectionButtons
          list={skills.allIds}
          getLabel={(id) => skills.byId[id].heading}
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
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default EditSkillsPanel;
