import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useLocalStorage } from "../hooks";
import { ColorModeContext } from "../utils/contexts";
import NavBar from "./Nav/NavBar";

const BaseContainer = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("isDarkMode", true);

  return (
    <ColorModeContext.Provider
      value={{
        isDarkMode,
        toggleMode: () => setIsDarkMode((prevMode: boolean) => !prevMode),
      }}
    >
      <Box bgColor={isDarkMode ? "#1A202C" : "white"}>
        <NavBar />
        <Box
          minH="100vh"
          maxW="1440px"
          marginLeft="auto"
          marginRight="auto"
          pt={["72px", null, "100px"]}
          px={["22px", "30px", null, "50px"]}
          color={isDarkMode ? "white" : "black"}
        >
          {children}
        </Box>
      </Box>
    </ColorModeContext.Provider>
  );
};

export default BaseContainer;
