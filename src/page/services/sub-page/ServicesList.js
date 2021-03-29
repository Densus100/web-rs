import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { SimpleGrid, Center, Heading } from "@chakra-ui/react";

const ServicesList = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Heading mb="6">Services</Heading>
      <SimpleGrid columns={3} gap="16">
        <Center
          as={Link}
          to={`${path}/general-outpatient`}
          border="2px"
          borderColor="blue.600"
          py="10"
          fontSize="xl"
          fontWeight="bold"
          color="blue.600"
          rounded="md"
          _hover={{ bgColor: "blue.50" }}
        >
          General Outpatient
        </Center>
        <Center
          as={Link}
          to={`${path}/general-inpatient`}
          border="2px"
          borderColor="blue.600"
          py="10"
          fontSize="xl"
          fontWeight="bold"
          color="blue.600"
          rounded="md"
          _hover={{ bgColor: "blue.50" }}
        >
          General Inpatient
        </Center>
        <Center
          as={Link}
          to={`${path}/stroke-management`}
          border="2px"
          borderColor="blue.600"
          py="10"
          fontSize="xl"
          fontWeight="bold"
          color="blue.600"
          rounded="md"
          _hover={{ bgColor: "blue.50" }}
        >
          Stroke Management
        </Center>
        <Center
          as={Link}
          to={`${path}/chd-management`}
          border="2px"
          borderColor="blue.600"
          py="10"
          fontSize="xl"
          fontWeight="bold"
          color="blue.600"
          rounded="md"
          _hover={{ bgColor: "blue.50" }}
        >
          CHD Management
        </Center>
        <Center
          as={Link}
          to={`${path}/kidney-failure-management`}
          border="2px"
          borderColor="blue.600"
          py="10"
          fontSize="xl"
          fontWeight="bold"
          color="blue.600"
          rounded="md"
          _hover={{ bgColor: "blue.50" }}
        >
          Kidney Failure Management
        </Center>
      </SimpleGrid>
    </>
  );
};

export default ServicesList;
