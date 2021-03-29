import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon, Box } from "@chakra-ui/react";

const NavLink = ({ children, icon, to }) => {
  const { pathname } = useLocation();

  const match = (to, pathname) => {
    if (pathname === "/dashboard") {
      if (to === "/dashboard") {
        return true;
      }
    } else if (to !== "/dashboard" && to !== "/" && pathname.startsWith(to)) {
      return true;
    }
    return false;
  };

  return (
    <Link to={to}>
      <Box
        bgColor={match(to, pathname) ? "gray.200" : "gray.100"}
        _hover={{ bgColor: "white", color: "purple.600" }}
        color={match(to, pathname) ? "gray.900" : "gray.800"}
        display="flex"
        alignItems="center"
        px="4"
        py="3"
        fontSize="md"
        fontWeight="medium"
        // rounded="md"
        // mb="2"
        // boxShadow="sm"
      >
        <Icon as={icon} w="7" h="7" mr="3" />
        <Box as="span">{children}</Box>
      </Box>
    </Link>
  );
};

export default NavLink;
