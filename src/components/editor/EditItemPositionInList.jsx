import Button from "../base/Button.jsx";
import "../../styles/editor/EditItemPositionInList.css";

function EditItemPositionInList({
  deleteItemCallback,
  moveItemBackCallback,
  moveItemForthCallback,
}) {
  return (
    <div className="edit-item-position-in-list-buttons">
      <Button
        customCssClass={`move-item-back-in-list-button`}
        iconName={"moveBack"}
        onClickCallback={moveItemBackCallback}
      ></Button>
      <Button
        customCssClass={`move-item-forth-in-list-button`}
        iconName={"moveForth"}
        onClickCallback={moveItemForthCallback}
      ></Button>
      <Button
        customCssClass={`delete-item-from-list-button`}
        iconName={"delete"}
        onClickCallback={deleteItemCallback}
      ></Button>
    </div>
  );
}

export default EditItemPositionInList;
