import { useState } from "react";
import Button from "../base/Button.jsx";

function DropDownMenu(props) {
  const [dropDownMenuVisible, setDropDownMenuVisible] = useState(false);
  return (
    <div className="drop-down-menu">
      <Button
        customCssClass={"drop-down-menu-btn functionality-btn"}
        iconName={dropDownMenuVisible ? "x" : "menu"}
        onClickCallback={() => {
          setDropDownMenuVisible((val) => !val);
        }}
      />
      {dropDownMenuVisible && (
        <div className="drop-down-menu-items">{props.children}</div>
      )}
    </div>
  );
}

export default DropDownMenu;
