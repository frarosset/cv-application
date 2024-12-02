import Button from "../base/Button.jsx";
// import "../../styles/editor/EditListSelectionButtons.css";

function EditItemPositionInList({ deleteItemCallback }) {
  return (
    <div className="edit-item-position-in-list-buttons">
      <Button
        customCssClass={`delete-item-from-list-button`}
        iconName={"delete"}
        onClickCallback={deleteItemCallback}
      ></Button>
    </div>
  );
}

export default EditItemPositionInList;
