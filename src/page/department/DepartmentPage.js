import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import AppShell from "../../components/staff/appshell/AppShell";
import DepartmentList from "./sub-page/DepartmentList";
import Polyclinic from "./sub-page/Polyclinic";
// import ServicesList from "./sub-page/ServicesList";
// import GeneralOutpatient from "./sub-page/GeneralOutpatient";

const DepartmentPage = () => {
  const { path } = useRouteMatch();

  return (
    <AppShell>
      <Box maxW="7xl" mx="auto" py="10" px={{ base: "10", xl: "8" }}>
        <Switch>
          <Route exact path={path}>
            <DepartmentList />
          </Route>
          <Route exact path={`${path}/polyclinic`}>
            <Polyclinic />
          </Route>
        </Switch>
      </Box>
    </AppShell>
  );
};

export default DepartmentPage;
