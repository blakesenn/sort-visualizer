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
import { swap } from "../../../utils/helpers";
import { Step } from "../../../utils/interfaces";
import Overview from "../../visualizers/Overview";
import Simple from "../../visualizers/Simple";

function bubbleSort(arr: Array<number>): Array<Step> {
  let st = 1;
  const sortSteps = [];
  let sortedSoFar = arr.length;
  let arrCopy = [...arr];
  for (let index = 0; index < arr.length - 1; index++) {
    for (let j = 0; j < arr.length - index - 1; j++) {
      const isSwap = arr[j] > arr[j + 1];
      sortSteps.push({
        step: st,
        arr: arrCopy,
        swapLess: j + 1,
        swapGreater: j,
        swapped: false,
        isInitial: true,
        sortedSoFar: sortedSoFar,
      });
      st++;
      if (isSwap) {
        sortSteps.push({
          step: st,
          arr: arrCopy,
          swapLess: j + 1,
          swapGreater: j,
          swapped: false,
          isInitial: false,
          sortedSoFar: sortedSoFar,
        });
        swap(arr, j + 1, j);
        arrCopy = [...arr];
        sortSteps.push({
          step: st,
          arr: arrCopy,
          swapLess: j,
          swapGreater: j + 1,
          swapped: true,
          isInitial: false,
          sortedSoFar: sortedSoFar,
        });
      }
    }
    sortedSoFar--;
  }
  return sortSteps;
}

function BubbleSort() {
  return (
    <Box>
      <Text fontSize="2xl" mb="12px">
        Bubble Sort
      </Text>
      <Tabs isLazy isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Overview</Tab>
          <Tab>Detail</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Overview
              sort={SORTING_ALGORITHMS.Bubble}
              algo={bubbleSort}
              speedDefault={100}
              speedFactor={800}
            />
          </TabPanel>
          <TabPanel>
            <Simple algo={bubbleSort} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default BubbleSort;
