import React from "react";
import { Switch, Route, useRouteMatch, useLocation } from "react-router-dom";
import { Box, Grid, GridItem } from "@chakra-ui/react";

import AppShell from "../../components/staff/appshell/AppShell";
import EventNodeList from "./sub-page/EventNodeList";
import Booking from "./sub-page/Booking";
import RegisterAccount from "./sub-page/RegiterAccount";
import Checkin from "./sub-page/Checkin";
import Payment from "./sub-page/Payment";
import Anamnesis from "./sub-page/Anamnesis";
// import ServicesList from "./sub-page/ServicesList";
// import GeneralOutpatient from "./sub-page/GeneralOutpatient";
import SubMenuNav from "../../components/staff/submenu-nav/SubMenuNav";

const links = [
  {
    to: "/events/registration",
    text: "Registration",
  },
  {
    to: "/events/booking",
    text: "Booking",
  },
  {
    to: "/events/checkin",
    text: "Check-in",
  },
  {
    to: "/events/examination",
    text: "Examination",
  },
  {
    to: "/events/imaging",
    text: "Imaging",
  },
  {
    to: "/events/blood-test",
    text: "Blood Test",
  },
  {
    to: "/events/prescription",
    text: "Prescription",
  },
  {
    to: "/events/collect-medicine",
    text: "Collect Medicine",
  },
  {
    to: "/events/payment",
    text: "Payment",
  },
];

const EventNodePage = () => {
  const { path } = useRouteMatch();
  const location = useLocation();

  console.log({ path });
  console.log({ location });

  return (
    <AppShell>
      {/* <Box mx="auto" py="10" px={{ base: "6", xl: "16" }}> */}
      <Grid templateColumns="repeat(6, 1fr)" minH="full">
        <GridItem
          colSpan={1}
          display={location.pathname === "/events" ? "none" : "block"}
          // display="block"
          py="4"
          h="full"
          bg="white"
          borderRight="2px"
          borderRightColor="gray.200"
        >
          <SubMenuNav name="Events" links={links} />
        </GridItem>
        <GridItem
          colSpan={location.pathname === "/events" ? 6 : 5}
          p="4"
          bg="gray.50"
        >
          <Switch>
            <Route exact path={path}>
              <EventNodeList />
            </Route>
            <Route exact path={`${path}/registration`}>
              <RegisterAccount />
            </Route>
            <Route exact path={`${path}/booking`}>
              <Booking />
            </Route>
            <Route exact path={`${path}/checkin`}>
              <Checkin />
            </Route>
            <Route exact path={`${path}/anamnesis`}>
              <Anamnesis />
            </Route>
            <Route exact path={`${path}/payment`}>
              <Payment />
            </Route>
          </Switch>
        </GridItem>
      </Grid>
      {/* </Box> */}
    </AppShell>
  );
};

export default EventNodePage;
