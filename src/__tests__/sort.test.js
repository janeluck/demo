import {
  bubbleSort,
  insertSort,
  selectSort,
  mergeSort,
  quickSort
} from "../Algorithms/Sort/index.js";
const arr = [2, 3, 4, 8, 6, 1, 5, 8, 5, 3, 7];
it("sort bubbleSort", () => {
  expect(bubbleSort(arr)).toEqual([1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 8]);
});
it("sort insertSort", () => {
  expect(insertSort(arr)).toEqual([1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 8]);
});
it("sort selectSort", () => {
  expect(selectSort(arr)).toEqual([1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 8]);
});
it("sort mergeSort", () => {
  expect(mergeSort(arr)).toEqual([1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 8]);
});
it("sort quickSort", () => {
  expect(quickSort(arr)).toEqual([1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 8]);
});
