import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Grid,
  Divider,
  Icon,
} from "@chakra-ui/react";

import NavLink from "../share/NavLink";
import { HiOutlineHome } from "react-icons/hi";
import {
  RiBuilding4Line,
  RiDashboardLine,
  RiHandHeartFill,
  RiListSettingsLine,
  RiSubtractFill,
} from "react-icons/ri";
import { MdEventNote } from "react-icons/md";

export const AccordionMenu = () => {
  // const { pathname } = useLocation();

  // const match = (to, pathname) => {
  //   if (pathname === "/dashboard") {
  //     if (to === "/dashboard") {
  //       return true;
  //     }
  //   } else if (to !== "/dashboard" && to !== "/" && pathname.startsWith(to)) {
  //     return true;
  //   }
  //   return false;
  // };

  return (
    <Accordion allowToggle>
      <AccordionItem>
        <MenuWithoutChild to="/dashboard">Dashboard</MenuWithoutChild>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton
          p="0"
          display="flex"
          // justifyContent="space-around"
          // bgColor="blue.600"
          // _hover={{ bg: "white", color: "blue.500" }}
          // color="white"
          // _focus={{ outline: "none", bg: "blue.500" }}
        >
          <MenuParent to="/admin-smart-rs">Admin Smart RS</MenuParent>
          <AccordionIcon color="white" mx="3" display="flex" h="full" />
        </AccordionButton>
        <AccordionPanel display="block" p="0">
          <Divider />
          <MenuChild to="/admin-smart-rs/application">Application</MenuChild>
          <Divider />
          <MenuChild to="/admin-smart-rs/role">Role</MenuChild>
          <Divider />
          <MenuChild to="/admin-smart-rs/menu">Menu</MenuChild>
          <Divider />
          <MenuChild to="/admin-smart-rs/route">Route</MenuChild>
          <Divider />
          <MenuChild to="/admin-smart-rs/assign">Assign</MenuChild>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton
          p="0"
          display="flex"
          // justifyContent="space-around"
          // bgColor="blue.600"
          // _hover={{ bg: "white", color: "blue.500" }}
          // color="white"
          // _focus={{ outline: "none", bg: "blue.500" }}
        >
          <MenuParent to="/dashboard/events">Events</MenuParent>
          <AccordionIcon color="white" mx="3" display="flex" />
        </AccordionButton>
        <AccordionPanel display="block" p="0">
          <Divider />
          <MenuChild to="/dashboard/events/register-account">
            Registrasi Akun
          </MenuChild>
          <Divider />
          <MenuChild to="/dashboard/events/booking">Booking</MenuChild>
          <Divider />
          <MenuChild to="/dashboard/events/checkin">Checkin</MenuChild>
          <Divider />
          <MenuChild to="/dashboard/events/anamnesis">Anamnesis</MenuChild>
          <Divider />
          <MenuChild to="/dashboard/events/payment">Pembayaran</MenuChild>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <MenuWithoutChild to="/dashboard/patient">Pasien</MenuWithoutChild>
      </AccordionItem>
      {/* <AccordionItem>
        <MenuWithoutChild>Menu Without Child</MenuWithoutChild>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton
          p="0"
          display="flex"
          // justifyContent="space-around"
          // bgColor="blue.600"
          // _hover={{ bg: "white", color: "blue.500" }}
          // color="white"
          // _focus={{ outline: "none", bg: "blue.500" }}
        >
          <MenuParent>Menu Parent 2</MenuParent>
          <AccordionIcon color="white" mx="3" display="flex" h="full" />
        </AccordionButton>
        <AccordionPanel display="block" p="0">
          <Divider />
          <MenuChild>Menu Child 1</MenuChild>
          <Divider />
          <MenuChild>Menu Child 2</MenuChild>
          <Divider />
          <MenuChild>Menu Child 3</MenuChild>
        </AccordionPanel>
      </AccordionItem> */}
    </Accordion>
  );
};

const MenuWithoutChild = ({ children, to }) => {
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
    <Box
      as={Link}
      to={to}
      // bgColor="blue.50"
      // _hover="bg.white"
      // color="blue.500"
      // bgColor="blue.600"
      bgColor={match(to, pathname) ? "blue.50" : "blue.600"}
      _hover={{ bg: "white", color: "blue.500" }}
      // color="white"
      color={match(to, pathname) ? "blue.600" : "blue.50"}
      _focus={{ outline: "none" }}
      display="flex"
      alignItems="center"
      px="4"
      // pl="8"
      py="3"
      fontSize="sm"
      fontWeight="medium"
      boxShadow="sm"
      borderBottom="1px"
      borderBottomColor="blue.400"
      // rounded="md"
      // mb="2"
    >
      {children}
    </Box>
  );
};

const MenuChild = ({ children, to }) => {
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
    <Box
      as={Link}
      to={to}
      // bgColor="blue.50"
      // _hover="bg.white"
      // color="blue.500"
      // bgColor="blue.600"
      bgColor={match(to, pathname) ? "blue.50" : "blue.600"}
      _hover={{ bg: "white", color: "blue.500" }}
      _focus={{ outline: "none" }}
      // color="white"
      color={match(to, pathname) ? "blue.600" : "blue.50"}
      display="flex"
      alignItems="center"
      // px="4"

      py="3"
      fontSize="sm"
      fontWeight="medium"
      boxShadow="sm"
      // borderTop="1px"
      // borderTopColor="blue.400"
      // rounded="md"
      // mb="2"
    >
      <Icon as={RiSubtractFill} ml="5" mr="2" />
      {children}
    </Box>
  );
};

const MenuParent = ({ children, to }) => {
  const { pathname } = useLocation();

  const match = (to, pathname) => {
    if (pathname === to) {
      return true;
    }
    return false;
  };

  return (
    <Box
      // bgColor="blue.500"
      // _hover={{ bg: "white", color: "blue.500" }}
      // color="white"
      p="0"
      display="flex"
      // justifyContent="space-around"
      // bgColor="blue.600"
      bgColor={match(to, pathname) ? "blue.50" : "blue.600"}
      _hover={{ bg: "white", color: "blue.500" }}
      _focus={{ outline: "none" }}
      // color="white"
      color={match(to, pathname) ? "blue.600" : "blue.50"}
      // _focus={{ outline: "none", bg: "blue.500", color: "white" }}
      as={Link}
      to={to}
      // display="flex"
      alignItems="center"
      px="4"
      py="3"
      fontSize="sm"
      fontWeight="medium"
      boxShadow="sm"
      flexGrow="1"
      // rounded="md"
      // mb="2"
    >
      {children}
    </Box>
  );
};
