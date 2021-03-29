import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { SimpleGrid, Center, Heading } from "@chakra-ui/react";

const EventNodeList = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Heading mb="6">Events</Heading>
      <SimpleGrid columns={3} gap={{ base: "8", xl: "16" }}>
        <Center
          as={Link}
          to={`${path}/registration`}
          border="2px"
          borderColor="purple.600"
          py="10"
          fontSize="xl"
          fontWeight="bold"
          color="purple.600"
          rounded="md"
          _hover={{ bgColor: "purple.50" }}
        >
          Registration
        </Center>
        <Center
          as={Link}
          to={`${path}/booking`}
          border="2px"
          borderColor="purple.600"
          py="10"
          fontSize="xl"
          fontWeight="bold"
          color="purple.600"
          rounded="md"
          _hover={{ bgColor: "purple.50" }}
        >
          Booking
        </Center>
        <Center
          as={Link}
          to={`${path}/checkin`}
          border="2px"
          borderColor="purple.600"
          py="10"
          fontSize="xl"
          fontWeight="bold"
          color="purple.600"
          rounded="md"
          _hover={{ bgColor: "purple.50" }}
        >
          Check-in
        </Center>
        <Center
          as={Link}
          to={`${path}/examination`}
          border="2px"
          borderColor="purple.600"
          py="10"
          fontSize="xl"
          fontWeight="bold"
          color="purple.600"
          rounded="md"
          _hover={{ bgColor: "purple.50" }}
        >
          Examination
        </Center>
        <Center
          as={Link}
          to={`${path}/imaging`}
          border="2px"
          borderColor="purple.600"
          py="10"
          fontSize="xl"
          fontWeight="bold"
          color="purple.600"
          rounded="md"
          _hover={{ bgColor: "purple.50" }}
        >
          Imaging
        </Center>
        <Center
          as={Link}
          to={`${path}/blood-test`}
          border="2px"
          borderColor="purple.600"
          py="10"
          fontSize="xl"
          fontWeight="bold"
          color="purple.600"
          rounded="md"
          _hover={{ bgColor: "purple.50" }}
        >
          Blood Test
        </Center>
        <Center
          as={Link}
          to={`${path}/prescription`}
          border="2px"
          borderColor="purple.600"
          py="10"
          fontSize="xl"
          fontWeight="bold"
          color="purple.600"
          rounded="md"
          _hover={{ bgColor: "purple.50" }}
        >
          Prescription
        </Center>
        <Center
          as={Link}
          to={`${path}/collect-medicine`}
          border="2px"
          borderColor="purple.600"
          py="10"
          fontSize="xl"
          fontWeight="bold"
          color="purple.600"
          rounded="md"
          _hover={{ bgColor: "purple.50" }}
        >
          Collect Medicine
        </Center>
        <Center
          as={Link}
          to={`${path}/payment`}
          border="2px"
          borderColor="purple.600"
          py="10"
          fontSize="xl"
          fontWeight="bold"
          color="purple.600"
          rounded="md"
          _hover={{ bgColor: "purple.50" }}
        >
          Payment
        </Center>
      </SimpleGrid>
    </>
  );
};

export default EventNodeList;
