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

function addNewItem(array, setArray, setItemId, initItemData = {}) {
  const copiedArray = JSON.parse(JSON.stringify(array));
  const newItem = initItem(initItemData);
  copiedArray.push(newItem);

  setArray(copiedArray);
  setItemId(newItem.id);

  return newItem;
}

function editItemAtIdx(itemIdx, property, value, array, setArray) {
  const copiedArray = JSON.parse(JSON.stringify(array));
  copiedArray[itemIdx][property] = value;

  setArray(copiedArray);
}

function setValueFor(itemId, property, array, setArray, setItemId) {
  // returns a callback to set a value for the property "property" for the item with id "itemId"
  return (value) => {
    const itemIdx = array.findIndex((x) => x.id === itemId);

    if (itemIdx == -1) {
      addNewItem(array, setArray, setItemId, { [property]: value });
    } else {
      editItemAtIdx(itemIdx, property, value, array, setArray);
    }
  };
}

export { getItem, addNewItem, setValueFor };
