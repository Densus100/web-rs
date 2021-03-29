import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Heading, VStack, Box } from "@chakra-ui/react";

const SubMenuNav = ({ links, name }) => {
  const { pathname } = useLocation();

  return (
    <Box>
      <Heading mb="2" py="4" px="6" fontSize="2xl">
        {name}
      </Heading>
      <VStack alignItems="stretch" spacing="2">
        {links.map((link) => (
          <Link to={link.to} key={link.to}>
            <Box
              _hover={{ bgColor: "purple.800", color: "purple.50" }}
              color={link.to === pathname ? "purple.600" : ""}
              fontWeight={link.to === pathname ? "bold" : "medium"}
              display="flex"
              alignItems="center"
              px="6"
              py="4"
              fontSize="md"
            >
              {/* <Icon as={icon} w="6" h="6" mr="3" /> */}
              <Box as="span">{link.text}</Box>
            </Box>
          </Link>
        ))}
      </VStack>
    </Box>
  );
};

export default SubMenuNav;
