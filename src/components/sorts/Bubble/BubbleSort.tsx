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
import BaseContainer from "../../BaseContainer";
import Overview from "../../visualizers/Overview";
import Simple from "../../visualizers/Simple";

function bubbleSort(arr: Array<number>): Array<Step> {
  const sortSteps: Step[] = [];
  let sortedSoFar = arr.length;
  let arrCopy = [...arr];
  for (let index = 0; index < arr.length - 1; index++) {
    for (let j = 0; j < arr.length - index - 1; j++) {
      const isSwap = arr[j] > arr[j + 1];
      sortSteps.push({
        arr: arrCopy,
        index1: j + 1,
        index2: j,
        swapped: false,
        isInitial: true,
        sortedSoFar: sortedSoFar,
      });
      if (isSwap) {
        sortSteps.push({
          arr: arrCopy,
          index1: j + 1,
          index2: j,
          swapped: false,
          isInitial: false,
          sortedSoFar: sortedSoFar,
        });
        swap(arr, j + 1, j);
        arrCopy = [...arr];
        sortSteps.push({
          arr: arrCopy,
          index1: j,
          index2: j + 1,
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
    <BaseContainer>
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
    </BaseContainer>
  );
}

export default BubbleSort;
