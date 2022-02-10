import React from "react";
import { Step } from "../../../utils/interfaces";

function mergeSort(arr: Array<number>, start: number, end: number) {
  if (start < end) {
    const mid = (start + end) / 2;
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    merge(arr, start, mid, end);
  }
}

function merge(arr: Array<number>, start: number, mid: number, end: number) {
  const n1 = mid - start + 1;
  const n2 = end - mid;

  console.log("end", end);
  console.log("mid", mid);
  const tempStart = new Array(n1);
  const tempEnd = new Array(n2);

  for (let i = 0; i < n1; i++) {
    tempStart[i] = arr[start + i];
  }
  for (let j = 0; j < n2; j++) {
    tempEnd[j] = arr[mid + 1 + j];
  }

  let indexFirst = 0;
  let indexSecond = 0;
  let indexMerged = start;

  while (indexFirst < n1 && indexSecond < n2) {
    if (tempStart[indexFirst] <= tempEnd[indexSecond]) {
      arr[indexMerged] = tempStart[indexFirst];
      indexFirst++;
    } else {
      arr[indexMerged] = tempEnd[indexSecond];
      indexSecond++;
    }
    indexMerged++;
  }

  // copy remaining elems

  while (indexFirst < n1) {
    arr[indexMerged] = tempStart[indexFirst];
    indexFirst++;
    indexMerged++;
  }

  while (indexSecond < n2) {
    arr[indexMerged] = tempEnd[indexSecond];
    indexSecond++;
    indexMerged++;
  }
}

function MergeSort() {
  return <div>Coming Soon!</div>;
}

export default MergeSort;
