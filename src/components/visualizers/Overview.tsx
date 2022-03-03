import {
  Box,
  Button,
  Flex,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { SORTING_ALGORITHMS } from "../../utils/constants";
import { generateData } from "../../utils/helpers";
import { Step } from "../../utils/interfaces";
import Item from "../SortItem";

type OverViewProps = {
  algo: (data: Array<number>, start?: number, end?: number) => Array<Step>;
  sort: SORTING_ALGORITHMS;
  speedFactor: number;
  speedDefault: number;
};

export function Overview({
  algo,
  sort,
  speedFactor,
  speedDefault,
}: OverViewProps) {
  const [numElements, setNumElements] = useState(20);
  const [steps, setSteps] = useState(algo(generateData(20, 200)));
  const [currentStep, setCurrentStep] = useState(0);
  const [start, setStart] = useState(false);
  const [speed, setSpeed] = useState(speedDefault);
  const timerRef = useRef<ReturnType<typeof setInterval>>(null);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const maxElements = useBreakpointValue({
    base: 30,
    md: 80,
    lg: 100,
    xl: 140,
  });

  const handleStart = () => {
    let st = 0;
    setCurrentStep(st);
    timerRef.current = setInterval(() => {
      if (st === steps.length - 1) {
        clearInterval(timerRef.current);
        setStart(false);
      } else {
        setCurrentStep(st + 1);
        st++;
      }
    }, speed);
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <Box>
      <Stack
        direction={["column", null, "row"]}
        spacing="6"
        display="flex"
        align={[null, null, "center"]}
      >
        <Box>
          <Slider
            defaultValue={20}
            min={20}
            max={maxElements}
            w="full"
            minW={[null, null, "xs"]}
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
          isLoading={start}
          loadingText="Sorting"
          color="black"
        >
          Start Sort
        </Button>
      </Stack>
      <Flex py="22px" minH={`${Math.max(...steps[0].arr) * 2.8}px`}>
        {steps[currentStep].arr.map((val, index) => {
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
              showVal={!isMobile && steps[0].arr.length <= 30}
            />
          );
        })}
      </Flex>
    </Box>
  );
}
