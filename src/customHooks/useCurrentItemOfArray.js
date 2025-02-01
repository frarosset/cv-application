import { useState } from "react";
import {
  getItem,
  deleteItem,
  moveItemBy,
  setValueForSetter,
  addNewItem,
} from "../components/helper/itemsArrayManagement.js";

const useCurrentItemOfArray = (array, setArray, allIdsPath, byIdPath) => {
  const [currentItemId, setCurrentItemId] = useState(
    array.allIds.length ? array.allIds[0] : null
  );

  let currentItem = getItem(array, ["byId", currentItemId]);
  if (typeof currentItem !== "object") currentItem = {};

  const isEmptyItem = Object.keys(currentItem).length === 0;
  const emptyItemClass = isEmptyItem ? "empty-item" : "";

  const validItem = currentItemId != null && array.byId[currentItemId] != null;

  const newItemCallback = () =>
    addNewItem(setArray, setCurrentItemId, {}, allIdsPath, byIdPath);
  const deleteItemCallback = () =>
    deleteItem(currentItemId, setArray, setCurrentItemId, allIdsPath, byIdPath);
  const moveItemBackCallback = () =>
    moveItemBy(currentItemId, -1, setArray, allIdsPath, byIdPath);
  const moveItemForthCallback = () =>
    moveItemBy(currentItemId, 1, setArray, allIdsPath, byIdPath);

  const setValueForCallback = (prop) =>
    setValueForSetter(
      currentItemId,
      prop,
      setArray,
      setCurrentItemId,
      allIdsPath,
      byIdPath
    );

  return {
    currentItemId,
    currentItem,
    validItem,
    emptyItemClass,
    setCurrentItemId,
    newItemCallback,
    deleteItemCallback,
    moveItemBackCallback,
    moveItemForthCallback,
    setValueForCallback,
  };
};

export default useCurrentItemOfArray;
