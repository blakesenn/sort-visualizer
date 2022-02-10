import { Flex, Icon, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { AlgosProps, SORTING_ALGORITHMS } from "../utils/constants";

type HeaderButtonProps = {
  onSelect: Dispatch<SetStateAction<SORTING_ALGORITHMS>>;
  button: AlgosProps;
  isSelected: boolean;
};

function HeaderButton({ button, onSelect, isSelected }: HeaderButtonProps) {
  return (
    <Flex
      as="button"
      h="full"
      w="120px"
      justify={"center"}
      align="center"
      borderBottom={isSelected ? "4px solid #4361ee" : "4px solid transparent"}
      disabled={isSelected}
      color={isSelected ? "#4361ee" : "black"}
      onClick={() => onSelect(button.label)}
    >
      <Text fontWeight="medium" fontSize="lg" fontFamily="mono">
        {button.label}{" "}
      </Text>

      <Icon mt="1" fontSize="lg" as={button.icon} />
    </Flex>
  );
}

export default HeaderButton;
