import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FaHospitalSymbol } from "react-icons/fa";

const Logo = () => {
  return (
    <Box
      px="4"
      py="2"
      h="16"
      display="flex"
      alignItems="center"
      bgColor="purple.600"
    >
      <Link to="/dashboard">
        <Flex alignItems="center">
          <Icon as={FaHospitalSymbol} w="10" h="10" fill="white" mr="3" />
          <Box>
            <Text fontSize="xl" color="white" fontWeight="bold">
              HOSPITAL
            </Text>
            <Text
              fontSize="md"
              fontWeight="semibold"
              color="purple.200"
              mt="-1.5"
            >
              Dashboard
            </Text>
          </Box>
        </Flex>
      </Link>
    </Box>
  );
};

export default Logo;
