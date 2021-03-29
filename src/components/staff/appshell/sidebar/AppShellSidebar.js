import React from "react";
import DesktopSidebar from "./desktop-sidebar/DesktopSidebar";
import MobileSidebar from "./mobile-sidebar/MobileSidebar";

const AppShellSidebar = ({ children, onCloseMobile, isOpenMobile }) => {
  return (
    <>
      <MobileSidebar onClose={onCloseMobile} isOpen={isOpenMobile}>
        {children}
      </MobileSidebar>
      <DesktopSidebar>{children}</DesktopSidebar>
    </>
  );
};

export default AppShellSidebar;
