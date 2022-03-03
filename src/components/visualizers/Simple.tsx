import { Box, Button, ButtonGroup, Flex } from "@chakra-ui/react";
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

  return (
    <Flex
      h="80px"
      w="100%"
      justify="center"
      align="center"
      mx="2"
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
      mt={isSelected && !step.isInitial && !step.swapped ? "120px" : 0}
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
  algo: (data: Array<number>) => Array<Step>;
};

export function Simple({ algo }: SimpleProps) {
  const [steps, setSteps] = useState(algo(generateData(6)));
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <Box>
      <ButtonGroup spacing={4} color="black">
        <Button
          onClick={() => {
            setCurrentStep(0);
            setSteps(algo(generateData(6)));
          }}
        >
          Generate data to sort
        </Button>

        <Button
          onClick={() => {
            setCurrentStep((prev) => prev - 1);
          }}
          isDisabled={currentStep === 0}
        >
          Prev Step
        </Button>

        <Button
          onClick={() => {
            setCurrentStep((prev) => prev + 1);
          }}
          isDisabled={currentStep === steps.length - 1}
        >
          Next Step
        </Button>
      </ButtonGroup>
      <Flex pt="40px">
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
