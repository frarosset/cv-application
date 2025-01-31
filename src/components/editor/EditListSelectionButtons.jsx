import Button from "../base/Button.jsx";
import "../../styles/editor/EditListSelectionButtons.css";

// It assumes there is an external list of items, each of which has a .id
// property. This list is passed as a prop.

// Another prop specifies the id of the currently selected item, while a
// prop to set it is also passed. Then, for each item, there is a button
// which selects the corresponding item. Only one button can be
// selected at a time.

// A 'new item' button is also added, which sets the selected item as an
// empty item with id=-1 (assuming ids start from 0).

const newItemId = -1;

function EditListSelectionButtons({
  list = [],
  getLabel = () => {},
  currentItemId,
  setCurrentItemId,
  emptyListText = "",
  newItemCallback = () => {
    //setCurrentItemId(newItemId);
  },
}) {
  const setCurrentClass = (thisItemId) =>
    thisItemId == currentItemId ? "current" : "";
  return (
    <div className="edit-list-selection-buttons">
      <Button
        key={newItemId}
        customCssClass={`edit-list-selection-new-item-button ${setCurrentClass(
          newItemId
        )}`}
        iconName={"addNew"}
        onClickCallback={newItemCallback}
      ></Button>

      <div className="edit-list-selection-items-buttons">
        {list.length == 0 ? (
          <p>{emptyListText}</p>
        ) : (
          list.map((id, idx) => {
            const textLabel = getLabel(id);
            const btnLabel = textLabel ? textLabel : `#${idx + 1}`;
            return (
              <Button
                key={id}
                customCssClass={`edit-list-selection-item-button ${id} ${setCurrentClass(
                  id
                )}`}
                text={btnLabel}
                onClickCallback={() => setCurrentItemId(id)}
              ></Button>
            );
          })
        )}
      </div>
    </div>
  );
}

export default EditListSelectionButtons;
