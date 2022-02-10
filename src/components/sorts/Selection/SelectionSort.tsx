import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { SORTING_ALGORITHMS } from "../../../utils/constants";
import { Step } from "../../../utils/interfaces";
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
      swapLess: currentMinIndex,
      swapGreater: index,
      swapped: index !== currentMinIndex,
      isInitial: false,
      sortedSoFar: sortedSoFar,
    });
    swap(arr, currentMinIndex, index);
    sortedSoFar++;
  }
  return sortSteps;
}

function SelectionSort() {
  return (
    <Box>
      <Text fontSize="2xl" mb="12px">
        Selection Sort
      </Text>
      <Tabs isLazy isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Overview</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Overview
              sort={SORTING_ALGORITHMS.Selection}
              algo={selectionSort}
              speedDefault={800}
              speedFactor={20000}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default SelectionSort;
