import { Flex, Icon, Text } from "@chakra-ui/react";
import { AlgosProps } from "../utils/constants";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ColorModeContext } from "../utils/contexts";

type HeaderButtonProps = {
  button: AlgosProps;
};

function HeaderButton({ button }: HeaderButtonProps) {
  const location = useLocation();

  const { isDarkMode } = useContext(ColorModeContext);

  const isActive = location.pathname === button.href;
  return (
    <Link to={button.href} style={{ height: "100%" }}>
      <Flex
        as="button"
        h="100%"
        w="120px"
        justify={"center"}
        align="center"
        borderBottom={isActive ? "4px solid #4361ee" : "4px solid transparent"}
        disabled={isActive}
        color={isActive ? "#4361ee" : isDarkMode ? "white" : "black"}
      >
        <Text fontWeight="medium" fontSize="lg" fontFamily="mono">
          {button.label}{" "}
        </Text>

        <Icon mt="1" fontSize="lg" as={button.icon} />
      </Flex>
    </Link>
  );
}

export default HeaderButton;
