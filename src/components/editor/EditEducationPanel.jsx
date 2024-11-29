import { useState } from "react";
import EditListSelectionButtons from "./EditListSelectionButtons.jsx";
import "../../styles/editor/EditSectionPanel.css";

function EditEducationPanel({ education, setEducation }) {
  const [currentItemId, setCurrentItemId] = useState(null);

  return (
    <div className="edit-section-panel edit-education-panel">
      <h3>Edit Education</h3>
      <EditListSelectionButtons
        list={education}
        currentItemId={currentItemId}
        setCurrentItemId={setCurrentItemId}
      />
      <p>
        {currentItemId != null &&
          `${currentItemId} ${
            currentItemId !== -1 && education[currentItemId].degree
          }, ${currentItemId !== -1 && education[currentItemId].institution}`}
      </p>
    </div>
  );
}

export default EditEducationPanel;
