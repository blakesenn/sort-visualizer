import { Box, Text } from "@chakra-ui/react";
import { SORTING_ALGORITHMS } from "../../../utils/constants";
import { Step } from "../../../utils/interfaces";
import BaseContainer from "../../BaseContainer";
import Overview from "../../visualizers/Overview";

function mergeSort(
  arr: Array<number>,
  start: number = 0,
  end: number = arr.length - 1,
  stepArr: Step[]
) {
  if (start < end) {
    const mid = Math.floor((start + end) / 2);
    mergeSort(arr, start, mid, stepArr);
    mergeSort(arr, mid + 1, end, stepArr);
    merge(arr, start, mid, end, stepArr);
  }
}

function merge(
  arr: Array<number>,
  start: number,
  mid: number,
  end: number,
  stepArr: Step[]
) {
  const n1 = mid - start + 1;
  const n2 = end - mid;

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
      if (indexMerged !== indexFirst + start) {
        stepArr.push({
          index1: indexMerged,
          index2: -1,
          arr: [...arr],
        });
      }
      arr[indexMerged] = tempStart[indexFirst];

      indexFirst++;
    } else {
      if (indexMerged !== indexSecond + mid + 1) {
        stepArr.push({
          index1: indexMerged,
          index2: -1,
          arr: [...arr],
        });
      }
      arr[indexMerged] = tempEnd[indexSecond];

      indexSecond++;
    }
    indexMerged++;
  }

  // copy remaining elems

  while (indexFirst < n1) {
    if (indexFirst + start !== indexMerged) {
      stepArr.push({
        index1: indexMerged,
        index2: -1,
        arr: [...arr],
      });
    }
    arr[indexMerged] = tempStart[indexFirst];

    indexFirst++;
    indexMerged++;
  }

  while (indexSecond < n2) {
    if (indexMerged !== indexSecond + mid + 1) {
      stepArr.push({
        index1: indexMerged,
        index2: -1,
        arr: [...arr],
      });
    }
    arr[indexMerged] = tempEnd[indexSecond];

    indexSecond++;
    indexMerged++;
  }
}

export const mergeSteps = (arr: number[], start: number, end: number) => {
  const steps: Step[] = [];
  mergeSort(arr, start, end, steps);
  steps.push({ index1: null, index2: null, arr: [...arr] });
  console.log(arr);
  return steps;
};

function MergeSort() {
  return (
    <BaseContainer>
      <Box>
        <Text fontSize="2xl" mb="22px">
          Merge Sort
        </Text>
        <Overview
          algo={mergeSteps}
          sort={SORTING_ALGORITHMS.Merge}
          speedDefault={800}
          speedFactor={20000}
        />
      </Box>
    </BaseContainer>
  );
}

export default MergeSort;
