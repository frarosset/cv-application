import EditListSelectionButtons from "./EditListSelectionButtons.jsx";
import EditItemPositionInList from "./EditItemPositionInList.jsx";
import ArrayOfInputWithLabel from "../base/ArrayOfInputWithLabel.jsx";
import inputProperties from "../../data/inputProperties.json";
import "../../styles/editor/EditSectionPanel.css";
import useCurrentItemOfArray from "../../customHooks/useCurrentItemOfArray.js";

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
  const itemData = useCurrentItemOfArray(
    coursesAndCertificates,
    setCoursesAndCertificates,
    ["allIds"],
    ["byId"]
  );

  return (
    <div
      className={`edit-section-panel edit-coursesAndCertificates-panel ${itemData.emptyItemClass}`}
    >
      <h3>Edit Courses & Certificates</h3>
      <div>
        <EditListSelectionButtons
          list={coursesAndCertificates.allIds}
          getLabel={(id) => coursesAndCertificates.byId[id].name}
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

export default EditCoursesAndCertificatesPanel;
