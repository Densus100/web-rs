import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Heading, VStack, Box } from "@chakra-ui/react";

const InsideNav = ({ links, title }) => {
  const { pathname } = useLocation();
  return (
    <>
      <Heading mb="2" p="4" fontSize="2xl">
        {title}
      </Heading>
      <VStack alignItems="stretch" spacing="2" pl="4">
        {links.map((link) => (
          <Link to={link.to} key={link.to}>
            <Box
              bgColor={link.to === pathname ? "blue.500" : "blue.50"}
              _hover={{ bgColor: "blue.800", color: "blue.50" }}
              color={link.to === pathname ? "white" : "blue.500"}
              display="flex"
              alignItems="center"
              px="4"
              py="5"
              fontSize="sm"
              fontWeight="medium"
              mb="2"
              boxShadow="sm"
              borderRight="4px"
              borderRightColor={
                link.to === pathname ? "blue.900" : "transparent"
              }
              roundedBottomLeft="md"
              roundedTopLeft="md"
            >
              {/* <Icon as={icon} w="6" h="6" mr="3" /> */}
              <Box as="span">{link.text}</Box>
            </Box>
          </Link>
        ))}
      </VStack>
    </>
  );
};

export default InsideNav;
