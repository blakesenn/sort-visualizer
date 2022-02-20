import { Box, Flex, HStack } from "@chakra-ui/react";
import React from "react";
import { NavButtons } from "../../utils/constants";
import HeaderButton from "../HeaderButton";

const NavBar = () => {
  return (
    <nav>
      <Box
        w="100%"
        pos="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="sticky"
        bgColor="white"
        boxShadow="lg"
        transition="all 0.25s"
      >
        <Box
          h={["66px", null, "86px"]}
          bg="transparent"
          maxW="1440px"
          px={["22px", null, "72px"]}
          mx="auto"
        >
          <HStack spacing="6" h="full">
            {NavButtons.map((button) => (
              <HeaderButton button={button} />
            ))}
          </HStack>
        </Box>
      </Box>
    </nav>
  );
};

export default NavBar;
