import "react-datepicker/dist/react-datepicker.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AdminSmartRS, MenuPage, RolePage } from "./page/admin-smart-rs";

import {
  ForgotPasswordPage,
  LoginPage,
  SetPasswordPage,
  SignupPage,
  VerificationPage,
} from "./page/auth";
import DepartmentPage from "./page/department/DepartmentPage";
import EventNodePage from "./page/event-node/EventNodePage";
import EventNodeList from "./page/event-node/sub-page/EventNodeList";
import { PatientDetailPage } from "./page/patient-detail/PatientDetailPage";
import { PatientPage } from "./page/patient/PatientPage";
import ServicesPage from "./page/services/ServicesPage";
import { DashboardPage } from "./page/staff";
import SuperAdminPage from "./page/super-admin/SuperAdminPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/verification">
          <VerificationPage />
        </Route>
        <Route path="/set-password">
          <SetPasswordPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/forgot-password">
          <ForgotPasswordPage />
        </Route>
        <Route path="/dashboard" exact>
          <DashboardPage />
        </Route>
        <Route path="/dashboard/superadmin">
          <SuperAdminPage />
        </Route>

        <Route path="/dashboard/department">
          <DepartmentPage />
        </Route>
        <Route path="/dashboard/services">
          <ServicesPage />
        </Route>

        {/* New */}
        <Route path="/admin-smart-rs">
          <AdminSmartRS />
        </Route>
        <Route path="/dashboard/patient">
          <PatientPage />
        </Route>
        <Route path="/dashboard/patient-detail">
          <PatientDetailPage />
        </Route>
        <Route path="/events">
          <EventNodePage />
        </Route>
        <Route path="/services">
          <ServicesPage />
        </Route>
        {/* <Route path="/events">
          <EventNodeList />
        </Route> */}
        {/* <Route path="/admin-smart-rs/role">
          <RolePage />
        </Route>
        <Route path="/admin-smart-rs/menu">
          <MenuPage />
        </Route> */}
      </Switch>
    </Router>
  );
};

export default App;
