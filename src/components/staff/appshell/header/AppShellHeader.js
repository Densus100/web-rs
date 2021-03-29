import React from "react";
import { Flex, Box } from "@chakra-ui/react";

import {
  MenuButton,
  SearchBar,
  NotificationButton,
  ProfileDropdown,
} from "./components";

const AppShellHeader = ({ onOpenMobile }) => {
  return (
    <Flex
      position="relative"
      style={{ zIndex: 10, flexShrink: 0 }}
      h="16"
      // bgColor="white"
      bgColor="purple.600"
      boxShadow="md"
      alignItems="center"
    >
      <MenuButton
        onClick={onOpenMobile}
        display={{ base: "flex", lg: "none" }}
      />
      <Box
        style={{ flex: "1 1 0%" }}
        px="4"
        display="flex"
        justifyContent="space-between"
      >
        <SearchBar />
        <Box ml="4" display="flex" alignItems="center">
          <NotificationButton />
          <ProfileDropdown />
        </Box>
      </Box>
    </Flex>
  );
};

export default AppShellHeader;
