import { useState } from "react";
import EditListSelectionButtons from "./EditListSelectionButtons.jsx";
import InputWithLabel from "../base/InputWithLabel.jsx";
import { getItem, setValueFor } from "../helper/itemsArrayManagement.js";
import inputProperties from "../../data/inputProperties.json";
import "../../styles/editor/EditSectionPanel.css";

const orderedInputProps = ["degree", "institution", "address"];
const inputProps = inputProperties.education;

function EditEducationPanel({ education, setEducation }) {
  const [currentItemId, setCurrentItemId] = useState(null);

  const [currentItem, showForm] = getItem(currentItemId, education);

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
          {orderedInputProps.map((prop) => (
            <InputWithLabel
              key={prop}
              id={prop}
              name={prop}
              label={inputProps[prop].label}
              value={currentItem[prop]}
              placeholder={inputProps[prop].placeholder}
              setValue={setValueFor(
                currentItemId,
                prop,
                education,
                setEducation,
                setCurrentItemId
              )}
              type={inputProps[prop].type}
              maxLength={inputProps[prop].maxLength}
              required={inputProps[prop].required}
            />
          ))}
        </form>
      )}
    </div>
  );
}

export default EditEducationPanel;
