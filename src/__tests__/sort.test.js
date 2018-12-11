import {
  bubbleSort,
  insertSort,
  selectSort,
  mergeSort,
  quickSort
} from "../Algorithms/Sort/index.js";
const arr = [2, 3, 4, 8, 6, 1, 5, 8, 5, 3, 7];
const sortedArr = [1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 8];
it("sort bubbleSort", () => {
  expect(bubbleSort(arr)).toEqual(sortedArr);
});
it("sort insertSort", () => {
  expect(insertSort(arr)).toEqual(sortedArr);
});
it("sort selectSort", () => {
  expect(selectSort(arr)).toEqual(sortedArr);
});
it("sort mergeSort", () => {
  expect(mergeSort(arr)).toEqual(sortedArr);
});
it("sort quickSort", () => {
  expect(quickSort(arr)).toEqual(sortedArr);
});
