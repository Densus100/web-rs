import React from "react";
import { Box, useDisclosure } from "@chakra-ui/react";
import { HiOutlineHome, HiUserGroup } from "react-icons/hi";
import {
  RiDashboardLine,
  RiListSettingsLine,
  RiBuilding4Line,
  RiHandHeartFill,
  // RiListCheck,
  // RiListCheck,
} from "react-icons/ri";
import { BiNetworkChart } from "react-icons/bi";
import { BsBuilding, BsListCheck } from "react-icons/bs";
// import { FaRegBuilding, FaMoneyBill, FaToolbox } from "react-icons/fa";
// import { ImLab } from "react-icons/im";
// import { GiRadioactive, GiMedicines } from "react-icons/gi";

import AppShellHeader from "./header/AppShellHeader";
import NavLink from "./share/NavLink";
import AppShellSidebar from "./sidebar/AppShellSidebar";
import { AccordionMenu } from "./accordion-menu/AccordionMenu";

const AppShell = ({ children }) => {
  const {
    isOpen: isOpenMobile,
    onOpen: onOpenMobile,
    onClose: onCloseMobile,
  } = useDisclosure();

  return (
    <Box style={{ minHeight: "640px" }} bgColor="gray.100">
      <Box
        style={{ height: "100vh" }}
        display="flex"
        overflow="hidden"
        bgColor="gray.100"
      >
        {/* Left Side */}
        <AppShellSidebar
          onCloseMobile={onCloseMobile}
          isOpenMobile={isOpenMobile}
        >
          <NavLink icon={HiOutlineHome} to="/dashboard">
            Dashboard
          </NavLink>
          <NavLink icon={BsBuilding} to="/corporate">
            Corporate
          </NavLink>
          {/* <NavLink icon={RiListSettingsLine} to="/dashboard/superadmin">
            Super Admin
          </NavLink> */}

          <NavLink icon={RiHandHeartFill} to="/services">
            Services
          </NavLink>
          <NavLink icon={BsListCheck} to="/events">
            Events
          </NavLink>
          <NavLink icon={RiBuilding4Line} to="/department">
            Department
          </NavLink>
          <NavLink icon={BiNetworkChart} to="/network">
            Network
          </NavLink>
          <NavLink icon={HiUserGroup} to="/user-management">
            User Management
          </NavLink>
          {/* <AccordionMenu /> */}
        </AppShellSidebar>

        {/* Right Side */}
        <Box
          display="flex"
          flexDir="column"
          w="0"
          style={{ flex: "1 1 0%" }}
          overflow="hidden"
          minH="100vh"
        >
          <AppShellHeader onOpenMobile={onOpenMobile} />

          {/* Main Content */}
          <Box
            as="main"
            style={{ flex: "1 1 0%" }}
            position="relative"
            overflowY="auto"
            minH="full"
            bgColor="white"
          >
            {/* <Box py="6"> */}
            {/* <Box maxW="8xl" mx="auto" px="4"> */}
            {/* <Box px="4"> */}
            {/* <AppShellBreadcrumb />
                <Heading
                  as="h1"
                  className="text-2xl font-semibold text-gray-900"
                >
                  Dashboard
                </Heading>
                <Box>Content</Box> */}
            {children}
            {/* </Box> */}
            {/* </Box> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AppShell;
