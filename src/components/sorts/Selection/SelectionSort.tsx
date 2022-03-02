import { Box, Text } from "@chakra-ui/react";
import { SORTING_ALGORITHMS } from "../../../utils/constants";
import { Step } from "../../../utils/interfaces";
import BaseContainer from "../../BaseContainer";
import Overview from "../../visualizers/Overview";

function swap(arr: Array<any>, newMinPos: number, oldMinPos: number) {
  const oldMinVal = arr[oldMinPos];
  arr[oldMinPos] = arr[newMinPos];
  arr[newMinPos] = oldMinVal;
}

function selectionSort(arr: Array<any>): Array<Step> {
  const sortSteps = [];
  let sortedSoFar = -1;
  for (let index = 0; index < arr.length - 1; index++) {
    let currentMinIndex = index;
    for (let j = index + 1; j < arr.length; j++) {
      if (arr[j] < arr[currentMinIndex]) {
        currentMinIndex = j;
      }
    }

    sortSteps.push({
      step: index + 1,
      arr: [...arr],
      index1: currentMinIndex,
      index2: index,
      swapped: index !== currentMinIndex,
      sortedSoFar: sortedSoFar,
    });
    swap(arr, currentMinIndex, index);
    sortedSoFar++;
  }
  // final sorted
  sortSteps.push({
    arr: [...arr],
  });
  return sortSteps;
}

function SelectionSort() {
  return (
    <BaseContainer>
      <Box>
        <Text fontSize="2xl" mb="22px">
          Selection Sort
        </Text>

        <Overview
          sort={SORTING_ALGORITHMS.Selection}
          algo={selectionSort}
          speedDefault={800}
          speedFactor={20000}
        />
      </Box>
    </BaseContainer>
  );
}

export default SelectionSort;
