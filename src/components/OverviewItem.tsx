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
  const isSwapLess = step.swapLess === index;
  const isSwapGreater = step.swapGreater === index;
  const isSelected = isSwapLess || isSwapGreater;

  return (
    <Flex
      mx="0.5"
      bgColor={
        itemIsSorted || isComplete
          ? "#57CC99"
          : isSelected && (step.swapped || step.isInitial)
          ? "red.600"
          : isSelected
          ? "green"
          : "indigo"
      }
      h={`${val * 2.5}px`}
      w="full"
      align="flex-end"
      justify="center"
      borderBottomRadius="xl"
    >
      {showVal && <Text color="white">{val}</Text>}
    </Flex>
  );
}

export default Item;
