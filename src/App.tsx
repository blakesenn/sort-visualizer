import { Box, Flex, HStack } from "@chakra-ui/react";
import { useState } from "react";
import BubbleSort from "./components/sorts/Bubble/BubbleSort";
import SelectionSort from "./components/sorts/Selection/SelectionSort";
import { ALGOS, SORTING_ALGORITHMS } from "./utils/constants";
import HeaderButton from "./components/HeaderButton";
import MergeSort from "./components/sorts/Merge/MergeSort";
import QuickSort from "./components/sorts/QuickSort";

function App() {
  const [selectedSort, setSelectedSort] = useState<SORTING_ALGORITHMS>(
    SORTING_ALGORITHMS.Bubble
  );

  return (
    <Box minH="100vh" h="100%">
      <Flex
        h="86px"
        w="full"
        shadow="md"
        bgColor="white"
        align="center"
        px="40px"
        pos="fixed"
        zIndex={1000}
        top={0}
      >
        <HStack spacing="6" h="full">
          {ALGOS.map((button) => (
            <HeaderButton
              isSelected={selectedSort === button.label}
              button={button}
              onSelect={setSelectedSort}
            />
          ))}
        </HStack>
      </Flex>
      <Box px="80px" pt="126px">
        {selectedSort === SORTING_ALGORITHMS.Selection && <SelectionSort />}
        {selectedSort === SORTING_ALGORITHMS.Bubble && <BubbleSort />}
        {selectedSort === SORTING_ALGORITHMS.Merge && <MergeSort />}
        {selectedSort === SORTING_ALGORITHMS.Quick && <QuickSort />}
      </Box>
    </Box>
  );
}

export default App;
