import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Box, Grid, GridItem } from "@chakra-ui/react";

import AppShell from "../../components/staff/appshell/AppShell";
import InsideNav from "../../components/common/InsideNav";
import { Role } from "./sub-page/Role";

// const links = [
//   {
//     to: `${path}/user-management`,
//     text: "User Management",
//   },
//   {
//     to: `${path}/app-management`,
//     text: "App Management",
//   },
//   {
//     to: `${path}/schedule`,
//     text: "Schedule",
//   },
// ];
const links = [
  {
    to: `/dashboard/superadmin/role`,
    text: "Role",
  },
  {
    to: `/dashboard/superadmin/app-management`,
    text: "App Management",
  },
  {
    to: `/dashboard/superadmin/schedule`,
    text: "Schedule",
  },
];

const SuperAdminPage = () => {
  const { path } = useRouteMatch();

  // console.log({ path });

  return (
    <AppShell>
      <Grid templateColumns="repeat(5, 1fr)" minH="full">
        <GridItem
          colSpan={1}
          py="4"
          h="full"
          bg="white"
          borderRight="2px"
          borderRightColor="gray.200"
        >
          <InsideNav links={links} title="Super Admin" />
        </GridItem>
        <GridItem colSpan={4} p="4" bg="gray.50">
          <Switch>
            <Route exact path={`${path}/role`}>
              <Role />
            </Route>
            <Route exact path={`/dashboard/superadmin/app-management`}>
              <ListTwo />
            </Route>
          </Switch>
        </GridItem>
      </Grid>
    </AppShell>
  );
};

const List = () => {
  return <div>List</div>;
};
const ListTwo = () => {
  return <div>List Two</div>;
};

export default SuperAdminPage;
