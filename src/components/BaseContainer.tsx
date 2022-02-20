import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import NavBar from "./Nav/NavBar";

const BaseContainer = ({ children }: { children: ReactNode }) => {
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
      >
        {children}
      </Box>
    </Box>
  );
};

export default BaseContainer;
