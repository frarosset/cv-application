const initItem = (initItemData = {}) => ({
  id: crypto.randomUUID(),
  ...initItemData,
});

// here, array is an array of items. Each item is an object that has the id proprerty

function getItem(itemId, array) {
  // returns item object (or {} if not found)
  const itemIdx = array.findIndex((x) => x.id === itemId);
  return itemIdx !== -1 ? array[itemIdx] : {};
}

function addNewItemHelper(array, setItemId, initItemData) {
  const newItem = initItem(initItemData);
  array.push(newItem);
  setItemId(newItem.id);
}

function addNewItem(setArray, setItemId, initItemData = {}) {
  setArray((array) => {
    const copiedArray = JSON.parse(JSON.stringify(array));

    addNewItemHelper(copiedArray, setItemId, initItemData);

    return copiedArray;
  });
}

function deleteItem(itemId, setArray, setItemId) {
  setArray((array) => {
    const itemIdx = array.findIndex((x) => x.id === itemId);

    if (itemIdx !== -1) {
      const copiedArray = JSON.parse(JSON.stringify(array));
      copiedArray.splice(itemIdx, 1);

      setItemId(null);

      return copiedArray;
    }

    // no edit: return the original array
    return array;
  });
}

function editItem(itemId, property, value, setArray, setItemId) {
  setArray((array) => {
    const itemIdx = array.findIndex((x) => x.id === itemId);
    const copiedArray = JSON.parse(JSON.stringify(array));

    if (itemIdx !== -1) {
      copiedArray[itemIdx][property] = value;
    } else {
      // add new item
      addNewItemHelper(copiedArray, setItemId, { [property]: value });
    }

    return copiedArray;
  });
}

function moveItemBy(itemId, displacement, setArray) {
  setArray((array) => {
    const itemIdx = array.findIndex((x) => x.id === itemId);

    if (itemIdx !== -1) {
      const newItemIdx = Math.max(
        0,
        Math.min(array.length - 1, itemIdx + displacement)
      );

      const copiedArray = JSON.parse(JSON.stringify(array));
      copiedArray.splice(newItemIdx, 0, copiedArray.splice(itemIdx, 1)[0]);
      return copiedArray;
    }

    // no edit: return the original array
    return array;
  });
}

function setValueForSetter(itemId, property, setArray, setItemId) {
  // returns a callback to set a value for the property "property" for the item with id "itemId"
  return (value) => {
    editItem(itemId, property, value, setArray, setItemId);
  };
}

export { getItem, moveItemBy, deleteItem, addNewItem, setValueForSetter };
