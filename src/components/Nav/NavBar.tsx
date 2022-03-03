import {
  Box,
  CloseButton,
  Flex,
  HStack,
  Icon,
  IconButton,
  Spacer,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { NavButtons } from "../../utils/constants";
import { ColorModeContext } from "../../utils/contexts";
import HeaderButton from "../HeaderButton";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { HiMenu } from "react-icons/hi";

const NavBar = () => {
  const { toggleMode, isDarkMode } = useContext(ColorModeContext);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

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
          px={["22px", "30px", null, "40px"]}
          mx="auto"
        >
          <Flex h="full" align="center">
            {isMobile ? (
              <>
                {!showMenu ? (
                  <IconButton
                    aria-label="nav_menu_toggle"
                    variant="ghost"
                    fontSize="2xl"
                    icon={<HiMenu />}
                    _hover={{ color: "#4361ee" }}
                    _active={{ color: "#4361ee" }}
                    onClick={toggleMenu}
                  />
                ) : (
                  <CloseButton
                    _hover={{ color: "#4361ee" }}
                    _active={{ color: "#4361ee" }}
                    onClick={toggleMenu}
                  />
                )}

                {showMenu && (
                  <Stack
                    w="100%"
                    top="66px"
                    left={0}
                    pos="fixed"
                    bgColor={isDarkMode ? "#1A202C" : "white"}
                    spacing="4"
                    shadow="2xl"
                    pb="4"
                  >
                    {NavButtons.map((button, index) => (
                      <HeaderButton isMobile key={index} button={button} />
                    ))}
                  </Stack>
                )}
              </>
            ) : (
              <HStack spacing="4" h="full">
                {NavButtons.map((button, index) => (
                  <HeaderButton key={index} button={button} />
                ))}
              </HStack>
            )}
            <Spacer />

            <Icon
              cursor="pointer"
              boxSize="40px"
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
