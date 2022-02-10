import {
  Box,
  Button,
  Flex,
  HStack,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { useState } from "react";
import { SORTING_ALGORITHMS } from "../../utils/constants";
import { generateData } from "../../utils/helpers";
import { Step } from "../../utils/interfaces";
import Item from "../OverviewItem";

type OverViewProps = {
  algo: (data: Array<number>) => Array<Step>;
  sort: SORTING_ALGORITHMS;
  speedFactor: number;
  speedDefault: number;
};

function Overview({ algo, sort, speedFactor, speedDefault }: OverViewProps) {
  const [numElements, setNumElements] = useState(20);
  const [steps, setSteps] = useState(algo(generateData(20, 200)));
  const [currentStep, setCurrentStep] = useState(0);
  const [start, setStart] = useState(false);
  const [speed, setSpeed] = useState(speedDefault);

  const handleStart = () => {
    let st = 0;
    setCurrentStep(st);
    const interval = setInterval(() => {
      if (st === steps.length - 1) {
        clearInterval(interval);
        setStart(false);
      } else {
        setCurrentStep(st + 1);
        st++;
      }
    }, speed);
  };

  return (
    <Box>
      <HStack spacing="6">
        <Box>
          <Slider
            defaultValue={20}
            min={20}
            max={140}
            w="xs"
            isDisabled={start}
            onChange={(val) => {
              setSpeed(speedFactor / val);
              setNumElements(val);
            }}
            onChangeEnd={(val) => {
              setCurrentStep(0);
              setSteps(algo(generateData(val, 200)));
            }}
          >
            <SliderMark
              value={numElements}
              textAlign="center"
              bg="blue.500"
              color="white"
              mt="-10"
              ml="-5"
              w="12"
            >
              {numElements}
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>
        <Button
          onClick={() => {
            setStart(true);
            handleStart();
          }}
          disabled={start}
        >
          Start Sort
        </Button>
      </HStack>
      <Flex pt="22px" minH={`${Math.max(...steps[0].arr) * 3}px`} pb="180px">
        {steps[currentStep].arr.map((val: number, index: number) => {
          const step = steps[currentStep];
          return (
            <Item
              key={index}
              index={index}
              itemIsSorted={
                sort === SORTING_ALGORITHMS.Bubble
                  ? index >= step.sortedSoFar
                  : index <= step.sortedSoFar
              }
              val={val}
              step={steps[currentStep]}
              isComplete={currentStep === steps.length - 1}
              showVal={steps[0].arr.length <= 30}
            />
          );
        })}
      </Flex>
    </Box>
  );
}

export default Overview;
