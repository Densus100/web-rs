import React from "react";
import { Link } from "react-router-dom";
import { Flex, Icon, Box } from "@chakra-ui/react";
import { FaHospitalSymbol } from "react-icons/fa";

const Logo = () => {
  return (
    <Link to="/">
      <Flex
        mb={{ base: "10", md: "28" }}
        alignItems="center"
        justifyContent="center"
        ml="-6"
      >
        {/* <Logo mx="auto" h="8" iconColor="blue.600" /> */}
        <Icon as={FaHospitalSymbol} w="12" h="12" fill="blue.600" mr="3" />
        <Box as="span" fontSize="3xl" fontWeight="Bold">
          Hospital
        </Box>
      </Flex>
    </Link>
  );
};

export default Logo;
