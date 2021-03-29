import React from "react";
import { Switch, Route, useRouteMatch, useLocation } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";

import AppShell from "../../components/staff/appshell/AppShell";
import ServicesList from "./sub-page/ServicesList";
import GeneralOutpatient from "./sub-page/GeneralOutpatient";
import SubMenuNav from "../../components/staff/submenu-nav/SubMenuNav";

const links = [
  {
    to: "/services/general-outpatient",
    text: "General Outpatient",
  },
  {
    to: "/services/general-inpatient",
    text: "General Inpatient",
  },
  {
    to: "/services/stroke-management",
    text: "Stroke Management",
  },
  {
    to: "/services/chd-management",
    text: "CHD Management",
  },
  {
    to: "/services/kidney-failure-management",
    text: "Kidney Failure Management",
  },
];

const ServicesPage = () => {
  const { path } = useRouteMatch();
  const location = useLocation();

  return (
    <AppShell>
      {/* <Box maxW="7xl" mx="auto" py="10" px={{ base: "10", xl: "8" }}> */}
      <Grid templateColumns="repeat(6, 1fr)" minH="full">
        <GridItem
          colSpan={1}
          display={location.pathname === "/services" ? "none" : "block"}
          // display="block"
          py="4"
          h="full"
          bg="white"
          borderRight="2px"
          borderRightColor="gray.200"
        >
          <SubMenuNav name="Services" links={links} />
        </GridItem>
        <GridItem
          colSpan={location.pathname === "/services" ? 6 : 5}
          p="4"
          bg="gray.50"
        >
          <Switch>
            <Route exact path={path}>
              <ServicesList />
            </Route>
            <Route exact path={`${path}/general-outpatient`}>
              <GeneralOutpatient />
            </Route>
          </Switch>
        </GridItem>
      </Grid>

      {/* </Box> */}
    </AppShell>
  );
};

export default ServicesPage;
