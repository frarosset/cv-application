import InputWithLabel from "../base/InputWithLabel.jsx";
import EditListSelectionButtons from "./EditListSelectionButtons.jsx";
import EditItemPositionInList from "./EditItemPositionInList.jsx";
import "../../styles/editor/EditOtherInfoListInputWithLabel.css";
import useCurrentItemOfArray from "../../customHooks/useCurrentItemOfArray.js";

function EditOtherInfoListInputWithLabel({
  inputProps,
  otherInfo = { byId: {}, allIds: [] },
  setState,
  pathInState,
}) {
  const itemData = useCurrentItemOfArray(
    otherInfo,
    setState,
    [...pathInState, "allIds"],
    [...pathInState, "byId"]
  );

  const otherInfoHeadingProp = inputProps.otherInfo.heading;
  const otherInfoTextProp = inputProps.otherInfo.text;
  const info = itemData.currentItem;

  return (
    <div className={`editor-other-info ${itemData.emptyItemClass}`}>
      <div className={"editor-other-info-selection"}>
        <h4>Other info</h4>
        <EditListSelectionButtons
          list={otherInfo.allIds}
          getLabel={(id) => {
            const heading = otherInfo.byId[id].heading;
            const text = otherInfo.byId[id].text;
            return `${heading ? heading + ": " : ""}${text ? text : ""}`;
          }}
          currentItemId={itemData.currentItemId}
          setCurrentItemId={itemData.setCurrentItemId}
          emptyListText={"(empty)"}
          newItemCallback={itemData.newItemCallback}
        />
      </div>
      {itemData.validItem && (
        <>
          <div className={"editor-other-info-heading"}>
            <InputWithLabel
              id={`${otherInfoHeadingProp}-${info.id}`}
              name={`${otherInfoHeadingProp}-${info.id}`}
              label={inputProps[otherInfoHeadingProp].text}
              value={info[inputProps[otherInfoHeadingProp].prop]}
              placeholder={inputProps[otherInfoHeadingProp].placeholder}
              setValue={(val) => {
                itemData.setValueForCallback(
                  inputProps[otherInfoHeadingProp].prop
                )(val);
              }}
              type={inputProps[otherInfoHeadingProp].type}
              maxLength={inputProps[otherInfoHeadingProp].maxLength}
              required={inputProps[otherInfoHeadingProp].required}
            />
            <EditItemPositionInList
              deleteItemCallback={itemData.deleteItemCallback}
              moveItemBackCallback={itemData.moveItemBackCallback}
              moveItemForthCallback={itemData.moveItemForthCallback}
            />
          </div>
          <InputWithLabel
            id={`${otherInfoTextProp}-${info.id}`}
            name={`${otherInfoTextProp}-${info.id}`}
            label={inputProps[otherInfoTextProp].text}
            value={info[inputProps[otherInfoTextProp].prop]}
            placeholder={inputProps[otherInfoTextProp].placeholder}
            setValue={(val) => {
              itemData.setValueForCallback(inputProps[otherInfoTextProp].prop)(
                val
              );
            }}
            type={inputProps[otherInfoTextProp].type}
            maxLength={inputProps[otherInfoTextProp].maxLength}
            required={inputProps[otherInfoTextProp].required}
          />
        </>
      )}
    </div>
  );
}

export default EditOtherInfoListInputWithLabel;
