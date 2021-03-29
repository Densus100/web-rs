import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Switch, Route } from "react-router-dom";
import AppShell from "../../components/staff/appshell/AppShell";
import { ApplicationPage } from "./ApplicationPage";
import { AssignPage } from "./AssignPage";
import { MenuPage } from "./MenuPage";
import { RolePage } from "./RolePage";
import { RoutePage } from "./RoutePage";

export const AdminSmartRS = () => {
  return (
    <AppShell>
      <Switch>
        <Route exact path="/admin-smart-rs">
          <Box px="10" maxW="6xl" mx="auto" overflowX="auto" py="6">
            <Heading mb="6" fontSize="3xl">
              Admin Smart-RS
            </Heading>
          </Box>
        </Route>
        <Route path="/admin-smart-rs/application">
          <ApplicationPage />
        </Route>
        <Route path="/admin-smart-rs/role">
          <RolePage />
        </Route>
        <Route path="/admin-smart-rs/menu">
          <MenuPage />
        </Route>
        <Route path="/admin-smart-rs/route">
          <RoutePage />
        </Route>
        <Route path="/admin-smart-rs/assign">
          <AssignPage />
        </Route>
      </Switch>
    </AppShell>
  );
};
