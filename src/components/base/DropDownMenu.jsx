import { useState } from "react";
import Button from "./Button.jsx";
import "../../styles/base/DropDownMenu.css";

function DropDownMenu(props) {
  const [dropDownMenuVisible, setDropDownMenuVisible] = useState(false);
  return (
    <div className="drop-down-menu">
      <Button
        customCssClass={"drop-down-menu-btn"}
        iconName={dropDownMenuVisible ? "x" : "menu"}
        onClickCallback={() => {
          setDropDownMenuVisible((val) => !val);
        }}
        onBlurCallback={() => setDropDownMenuVisible(false)}
        onFocusCallback={() => setDropDownMenuVisible(true)}
      />
      {dropDownMenuVisible && (
        <div className="drop-down-menu-items">{props.children}</div>
      )}
    </div>
  );
}

export default DropDownMenu;
