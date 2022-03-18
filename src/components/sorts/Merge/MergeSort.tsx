import BaseContainer from "../../BaseContainer";
import { Box, Text } from "@chakra-ui/react";
import { SORTING_ALGORITHMS } from "../../../utils/constants";
import { Step } from "../../../utils/interfaces";
import { Overview } from "../../visualizers";

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
  const size1 = mid - start + 1;
  const size2 = end - mid;

  const tempStart = new Array(size1);
  const tempEnd = new Array(size2);

  for (let i = 0; i < size1; i++) {
    tempStart[i] = arr[start + i];
  }
  for (let j = 0; j < size2; j++) {
    tempEnd[j] = arr[mid + 1 + j];
  }

  let indexFirst = 0;
  let indexSecond = 0;
  let indexMerged = start;

  while (indexFirst < size1 && indexSecond < size2) {
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

  while (indexFirst < size1) {
    if (indexFirst + start !== indexMerged) {
      stepArr.push({
        index1: indexMerged,
        arr: [...arr],
      });
    }
    arr[indexMerged] = tempStart[indexFirst];

    indexFirst++;
    indexMerged++;
  }

  while (indexSecond < size2) {
    if (indexMerged !== indexSecond + mid + 1) {
      stepArr.push({
        index1: indexMerged,
        arr: [...arr],
      });
    }
    arr[indexMerged] = tempEnd[indexSecond];

    indexSecond++;
    indexMerged++;
  }
}

export const mergeSteps = (arr: number[]): Step[] => {
  const steps: Step[] = [];
  mergeSort(arr, 0, arr.length - 1, steps);
  steps.push({ arr: [...arr] });
  return steps;
};

export function MergeSort() {
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
