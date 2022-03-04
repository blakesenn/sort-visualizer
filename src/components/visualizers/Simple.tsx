import {
  Box,
  Button,
  Flex,
  useBreakpointValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { generateData } from "../../utils/helpers";
import { Step } from "../../utils/interfaces";

type ItemProps = {
  index: number;
  step: Step;
  val: number;
  isComplete: boolean;
};

function Item({ index, step, val, isComplete }: ItemProps) {
  const isSwapLess = step.index1 === index;
  const isSwapGreater = step.index2 === index;
  const isSelected = isSwapLess || isSwapGreater;
  const isSmallDevice = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      h="80px"
      w="100%"
      maxW={["80px", null, "none"]}
      justify="center"
      align="center"
      mx={!isSmallDevice && "4"}
      my={isSmallDevice && "2"}
      bgColor={
        index >= step.sortedSoFar || isComplete
          ? "#57CC99"
          : isSelected && step.isInitial
          ? "green"
          : !step.isInitial && isSwapLess
          ? "red.400"
          : !step.isInitial && isSwapGreater
          ? "royalblue"
          : "indigo"
      }
      mt={
        !isSmallDevice && isSelected && !step.isInitial && !step.swapped
          ? "120px"
          : 0
      }
      ml={
        isSmallDevice && isSelected && !step.isInitial && !step.swapped
          ? "120px"
          : 0
      }
      p="4"
      color="white"
      rounded="md"
      fontSize="xl"
      transition="all 1s ease-out"
    >
      {val}
    </Flex>
  );
}

type SimpleProps = {
  algo: (data: Array<number>, isSimple: boolean) => Array<Step>;
};

export function Simple({ algo }: SimpleProps) {
  const [steps, setSteps] = useState(algo(generateData(6), true));
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <Box>
      <Wrap spacing={4} color="black">
        <WrapItem>
          <Button
            onClick={() => {
              setCurrentStep(0);
              setSteps(algo(generateData(6), true));
            }}
          >
            Generate data to sort
          </Button>
        </WrapItem>
        <WrapItem>
          <Button
            onClick={() => {
              setCurrentStep((prev) => prev - 1);
            }}
            isDisabled={currentStep === 0}
          >
            Prev Step
          </Button>
        </WrapItem>

        <WrapItem>
          <Button
            onClick={() => {
              setCurrentStep((prev) => prev + 1);
            }}
            isDisabled={currentStep === steps.length - 1}
          >
            Next Step
          </Button>
        </WrapItem>
      </Wrap>
      <Flex pt="40px" flexDir={["column", null, "row"]}>
        {steps[currentStep].arr.map((val: number, index: number) => {
          return (
            <Item
              key={index}
              index={index}
              val={val}
              isComplete={currentStep === steps.length - 1}
              step={steps[currentStep]}
            />
          );
        })}
      </Flex>
    </Box>
  );
}
