import React from "react";
import { Box } from "@chakra-ui/react";

import Logo from "../../share/Logo";

const DesktopSidebar = ({ children }) => {
  return (
    <Box
      display={{ base: "none", lg: "block" }}
      overflow="hidden"
      bgColor="gray.100"
    >
      <Box display="flex" flexDir="column" w="64">
        <Box
          display="flex"
          flexDir="column"
          flexGrow
          borderRight
          borderRightColor="gray.300"
          pb="4"
          bgColor="inherit"
          overflowY="auto"
        >
          <Logo />
          <Box mt="5" flexGrow display="flex" flexDir="column">
            <Box as="nav" style={{ flex: "1 1 0%" }} bgColor="inherit">
              {children}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DesktopSidebar;
