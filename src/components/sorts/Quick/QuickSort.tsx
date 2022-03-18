import { Box, Text } from "@chakra-ui/react";
import { SORTING_ALGORITHMS } from "../../../utils/constants";
import { swap } from "../../../utils/helpers";
import { Step } from "../../../utils/interfaces";
import BaseContainer from "../../BaseContainer";
import { Overview } from "../../visualizers";

function partition(arr: number[], start: number, end: number, stepArr: Step[]) {
  const pivot = arr[end];

  let i = start;
  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      stepArr.push({ arr: [...arr], index1: i, index2: j, pivotIndex: end });
      swap(arr, i, j);
      if (i !== j) {
        stepArr.push({
          arr: [...arr],
          index1: i,
          index2: j,
          pivotIndex: end,
          swapped: true,
        });
        stepArr.push({
          arr: [...arr],
          index1: i,
          index2: j,
          pivotIndex: end,
        });
      }

      i++;
    }
  }
  stepArr.push({ arr: [...arr], index1: i, index2: end });
  swap(arr, i, end);
  if (i !== end) {
    stepArr.push({ arr: [...arr], index1: i, index2: end, swapped: true });
    stepArr.push({ arr: [...arr], index1: i, index2: end });
  }

  return i;
}

function quickSort(arr: number[], start: number, end: number, stepArr: Step[]) {
  if (start < end) {
    const index = partition(arr, start, end, stepArr);
    quickSort(arr, start, index - 1, stepArr);
    quickSort(arr, index + 1, end, stepArr);
  }
}

const quickSteps = (arr: number[]): Step[] => {
  const steps: Step[] = [];
  steps.push({ arr: [...arr] });
  quickSort(arr, 0, arr.length - 1, steps);
  steps.push({ arr: [...arr] });
  return steps;
};

export function QuickSort() {
  return (
    <BaseContainer>
      <Box>
        <Text fontSize="2xl" mb="22px">
          Quick Sort
        </Text>
        <Overview
          algo={quickSteps}
          sort={SORTING_ALGORITHMS.Quick}
          speedDefault={800}
          speedFactor={10000}
        />
      </Box>
    </BaseContainer>
  );
}
