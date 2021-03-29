import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";

const AppShellBreadcrumb = ({ links }) => {
  const location = useLocation();

  return (
    <Breadcrumb mb="4" display="inline-block" py="1">
      {links?.map((link) => (
        <BreadcrumbItem key={link.url} isCurrentPage>
          <Link to={link.url}>
            <Box
              color={location.pathname === link.url ? "blue.600" : ""}
              fontWeight={location.pathname === link.url ? "semibold" : ""}
            >
              {link.name}
            </Box>
          </Link>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};

export default AppShellBreadcrumb;
