import { Flex, HStack } from "@chakra-ui/react";
import React from "react";
import { NavButtons } from "../../utils/constants";
import HeaderButton from "../HeaderButton";

const NavBar = () => {
  return (
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
        {NavButtons.map((button) => (
          <HeaderButton button={button} />
        ))}
      </HStack>
    </Flex>
  );
};

export default NavBar;
