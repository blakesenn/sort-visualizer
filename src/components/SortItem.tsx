import { Flex, Text } from "@chakra-ui/react";
import { Step } from "../utils/interfaces";

type ItemProps = {
  index: number;
  step: Step;
  val: number;
  isComplete: boolean;
  showVal: boolean;
  itemIsSorted: boolean;
};

function Item({
  index,
  step,
  val,
  isComplete,
  showVal,
  itemIsSorted,
}: ItemProps) {
  const isSwapLess = step.index1 === index;
  const isSwapGreater = step.index2 === index;
  const isSelected = isSwapLess || isSwapGreater;
  const isPivot = step.pivotIndex === index;

  return (
    <Flex
      mx="0.5"
      minW="4px"
      bgColor={
        itemIsSorted || isComplete
          ? "#57CC99"
          : isSelected && step.swapped
          ? "red.600"
          : isSelected
          ? "green"
          : isPivot
          ? "orange"
          : "indigo"
      }
      h={`${val * 2.5}px`}
      w="full"
      align="flex-end"
      justify="center"
      borderBottomRadius="xl"
      transition="height 0.2s ease-out"
    >
      {showVal && <Text color="white">{val}</Text>}
    </Flex>
  );
}

export default Item;
