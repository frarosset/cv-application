// An array of items is represented as an object with the following properties:
// - byId: an object with all the items indexed by their id
// - allIDs: an array
// Note however, that you can specify a different paths to point to these object, and different names, too
// ie, you can have, respectively:
// - object.message.allIds.5.comments.byId ---> parameter allIdsPath = ['message','allIds','5','comments','byId']
// - object.message.allIds.5.comments.allIds -> parameter byIdPath   = ['message','allIds','5','comments','allIDs']
// Each item is an object that has the id proprerty

const byId = "byId";
const allIds = "allIds";

// helper functions ----------------------------------------------------

function getItem(object, path) {
  return path.reduce(
    (prev, cur) => (prev && typeof prev === "object" ? prev[cur] : undefined),
    object
  );
}

function setItem(object, path, property, value) {
  // create intermediate properties if they are missing
  const target = path.reduce(
    (prev, cur) => (prev[cur] = prev[cur] || {}),
    object
  );
  target[property] = value;
}

const initItem = (initItemData = {}) => ({
  id: crypto.randomUUID(),
  ...initItemData,
});

// operations helper (not pure: they modify object input) ---------------

function addNewItemHelper(
  object,
  setItemId,
  initItemData,
  allIdsPath,
  byIdPath
) {
  const newItem = initItem(initItemData);
  const itemId = newItem.id;

  // add the actual item in the byId object, and its id to the allIds array
  setItem(object, byIdPath, itemId, newItem);

  let allIdsArr = getItem(object, allIdsPath);
  // if the array is not found, insert it as an empty array
  if (allIdsArr == null) {
    const lastIdx = allIdsPath.length - 1;
    setItem(object, allIdsPath.slice(0, lastIdx), allIdsPath[lastIdx], []);
    allIdsArr = getItem(object, allIdsPath);
  }
  allIdsArr.push(itemId);

  setItemId(itemId);
}

// main operations

function addNewItem(
  setObject,
  setItemId,
  initItemData = {},
  allIdsPath = [allIds],
  byIdPath = [byId]
) {
  setObject((object) => {
    const copiedObject = JSON.parse(JSON.stringify(object));

    addNewItemHelper(
      copiedObject,
      setItemId,
      initItemData,
      allIdsPath,
      byIdPath
    );

    return copiedObject;
  });
}

function deleteItem(
  itemId,
  setObject,
  setItemId,
  allIdsPath = [allIds],
  byIdPath = [byId]
) {
  setObject((object) => {
    const fullByIdPath = [...byIdPath, itemId];

    if (getItem(object, fullByIdPath) != null) {
      const copiedObject = JSON.parse(JSON.stringify(object));

      // delete the actual item from the byId object, and its id from the allIds array

      delete getItem(copiedObject, fullByIdPath);

      const allIdsArr = getItem(copiedObject, allIdsPath);
      const itemIdx = allIdsArr.findIndex((id) => id === itemId);
      allIdsArr.splice(itemIdx, 1);

      setItemId(null);

      return copiedObject;
    }

    // no edit: return the original object
    return object;
  });
}

function moveItemBy(
  itemId,
  displacement,
  setObject,
  allIdsPath = [allIds],
  byIdPath = [byId]
) {
  setObject((object) => {
    const fullByIdPath = [...byIdPath, itemId];

    if (getItem(object, fullByIdPath) != null) {
      const copiedObject = JSON.parse(JSON.stringify(object));

      // move the item in the allIds array (no need to modify the byId object)

      const allIdsArr = getItem(copiedObject, allIdsPath);
      const itemIdx = allIdsArr.findIndex((id) => id === itemId);
      const newItemIdx = Math.max(
        0,
        Math.min(allIdsArr.length - 1, itemIdx + displacement)
      );
      allIdsArr.splice(newItemIdx, 0, allIdsArr.splice(itemIdx, 1)[0]);

      return copiedObject;
    }

    // no edit: return the original object
    return object;
  });
}

function editItem(
  itemId,
  property,
  value,
  setObject,
  setItemId,
  allIdsPath = [allIds],
  byIdPath = [byId]
) {
  setObject((object) => {
    const fullByIdPath = [...byIdPath, itemId];

    const copiedObject = JSON.parse(JSON.stringify(object));

    if (getItem(copiedObject, fullByIdPath) != null) {
      // edit the actual item from the byId object  (no need to modify the allIds array)
      setItem(copiedObject, fullByIdPath, property, value);
    } else {
      // add new item
      addNewItemHelper(
        copiedObject,
        setItemId,
        { [property]: value },
        allIdsPath,
        byIdPath
      );
    }

    return copiedObject;
  });
}

function setValueForSetter(
  itemId,
  property,
  setObject,
  setItemId,
  allIdsPath = [allIds],
  byIdPath = [byId]
) {
  // returns a callback to set a value for the property "property" for the item with id "itemId"
  return (value) => {
    editItem(
      itemId,
      property,
      value,
      setObject,
      setItemId,
      allIdsPath,
      byIdPath
    );
  };
}

export { getItem, moveItemBy, deleteItem, addNewItem, setValueForSetter };
