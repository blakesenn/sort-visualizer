import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Step } from "../../../utils/interfaces";
import BaseContainer from "../../BaseContainer";

function mergeSort(
  arr: Array<number>,
  start: number,
  end: number,
  stepArr: Step[]
) {
  if (start < end) {
    const mid = (start + end) / 2;
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
      arr[indexMerged] = tempStart[indexFirst];
      // stepArr.push({
      //   step: 0,
      //   arr: [...arr],
      //   swapLess: indexFirst,
      //   swapGreater: indexSecond,
      //   swapped: true,
      //   isInitial: false,
      //   sortedSoFar: arr.length,
      // });

      indexFirst++;
    } else {
      arr[indexMerged] = tempEnd[indexSecond];
      // stepArr.push({
      //   step: 0,
      //   arr: [...arr],
      //   swapLess: indexFirst,
      //   swapGreater: indexSecond,
      //   swapped: false,
      //   isInitial: false,
      //   sortedSoFar: arr.length,
      // });
      indexSecond++;
    }
    indexMerged++;
  }

  // copy remaining elems

  while (indexFirst < n1) {
    arr[indexMerged] = tempStart[indexFirst];
    // stepArr.push({
    //   step: 0,
    //   arr: [...arr],
    //   swapLess: indexFirst,
    //   swapGreater: indexSecond,
    //   swapped: false,
    //   isInitial: false,
    //   sortedSoFar: arr.length,
    // });
    indexFirst++;
    indexMerged++;
  }

  while (indexSecond < n2) {
    arr[indexMerged] = tempEnd[indexSecond];
    // stepArr.push({
    //   step: 0,
    //   arr: [...arr],
    //   swapLess: indexFirst,
    //   swapGreater: indexSecond,
    //   swapped: false,
    //   isInitial: false,
    //   sortedSoFar: arr.length,
    // });
    indexSecond++;
    indexMerged++;
  }
}

export const mergeSteps = (arr: number[], start: number, end: number) => {
  const mergeStepsArr: Step[] = [];
  mergeSort(arr, start, end, mergeStepsArr);
};

function MergeSort() {
  return (
    <BaseContainer>
      <Box>
        <Text fontSize="2xl" mb="12px">
          Merge Sort (COMING SOON!)
        </Text>
        <Tabs isLazy isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>Overview</Tab>
            <Tab>Detail</Tab>
          </TabList>
          <TabPanels>
            <TabPanel></TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </BaseContainer>
  );
}

export default MergeSort;
