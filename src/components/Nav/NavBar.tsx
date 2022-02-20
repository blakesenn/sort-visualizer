import { Box, Flex, HStack, Icon, Spacer } from "@chakra-ui/react";
import React, { useContext } from "react";
import { NavButtons } from "../../utils/constants";
import { ColorModeContext } from "../../utils/contexts";
import HeaderButton from "../HeaderButton";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const NavBar = () => {
  const { toggleMode, isDarkMode } = useContext(ColorModeContext);
  return (
    <nav>
      <Box
        w="100%"
        pos="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="sticky"
        bgColor={isDarkMode ? "#1A202C" : "white"}
        color={isDarkMode ? "white" : "black"}
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
          <Flex h="full" align="center">
            <HStack spacing="6" h="full">
              {NavButtons.map((button) => (
                <HeaderButton button={button} />
              ))}
            </HStack>
            <Spacer />

            <Icon
              cursor="pointer"
              boxSize={"40px"}
              as={isDarkMode ? MdOutlineLightMode : MdOutlineDarkMode}
              onClick={toggleMode}
            />
          </Flex>
        </Box>
      </Box>
    </nav>
  );
};

export default NavBar;
