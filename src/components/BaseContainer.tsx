import { Box } from "@chakra-ui/react";
import { ReactNode, useContext } from "react";
import { ColorModeContext } from "../utils/contexts";
import NavBar from "./Nav/NavBar";

const BaseContainer = ({ children }: { children: ReactNode }) => {
  const { isDarkMode } = useContext(ColorModeContext);

  return (
    <Box>
      <NavBar />
      <Box
        minH="100vh"
        maxW="1440px"
        marginLeft="auto"
        marginRight="auto"
        pt={["72px", null, "100px"]}
        px="80px"
        bgColor={isDarkMode ? "#1A202C" : "white"}
        color={isDarkMode ? "white" : "black"}
      >
        {children}
      </Box>
    </Box>
  );
};

export default BaseContainer;
