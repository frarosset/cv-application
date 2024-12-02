import { useState } from "react";
import EditListSelectionButtons from "./EditListSelectionButtons.jsx";
import { getItem, setValueFor } from "../helper/itemsArrayManagement.js";
import ArrayOfInputWithLabel from "../base/ArrayOfInputWithLabel.jsx";
import inputProperties from "../../data/inputProperties.json";
import "../../styles/editor/EditSectionPanel.css";

const orderedInputProps = ["degree", "institution", "address"];
const inputProps = inputProperties.education;

function EditEducationPanel({ education, setEducation }) {
  const [currentItemId, setCurrentItemId] = useState(null);

  const showForm = currentItemId != null;
  const currentItem = getItem(currentItemId, education);

  return (
    <div className="edit-section-panel edit-education-panel">
      <h3>Edit Education</h3>
      <EditListSelectionButtons
        list={education}
        currentItemId={currentItemId}
        setCurrentItemId={setCurrentItemId}
      />

      {showForm && (
        <form>
          <ArrayOfInputWithLabel
            {...{ orderedInputProps, inputProps }}
            item={currentItem}
            setValueFor={(prop) =>
              setValueFor(
                currentItemId,
                prop,
                education,
                setEducation,
                setCurrentItemId
              )
            }
          />
        </form>
      )}
    </div>
  );
}

export default EditEducationPanel;
