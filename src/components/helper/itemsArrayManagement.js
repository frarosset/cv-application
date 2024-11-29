const emptyItemId = -1;
const initItem = (id) => ({
  id: id,
});

// here, array is an array of items. Each item is an object that has the id proprerty

function getItem(itemId, array) {
  // returns [item, isValid]

  if (itemId == null) return [null, false];

  const itemIdx = array.findIndex((x) => x.id === itemId);
  return [itemIdx == -1 ? initItem(emptyItemId) : array[itemIdx], true];
}

function setValueFor(itemId, property, array, setArray, setItemId) {
  // returns a callback to set a value for the property "property" for the item with id "itemId"
  return (value) => {
    const copiedArray = JSON.parse(JSON.stringify(array));

    const itemIdx = copiedArray.findIndex((x) => x.id === itemId);

    if (itemIdx == -1) {
      const newItemId = crypto.randomUUID();
      const newItem = { ...initItem(newItemId), [property]: value };

      copiedArray.push(newItem);
      setArray(copiedArray);
      setItemId(newItem.id);
    } else {
      copiedArray[itemIdx][property] = value;
      setArray(copiedArray);
    }
  };
}

export { getItem, setValueFor };
