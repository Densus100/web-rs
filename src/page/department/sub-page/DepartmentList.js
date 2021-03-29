import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { SimpleGrid, Center, Heading } from "@chakra-ui/react";

const DepartmentList = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Heading mb="6">Department</Heading>
      <SimpleGrid columns={3} gap="16">
        <Center
          as={Link}
          to={`${path}/polyclinic`}
          border="2px"
          borderColor="blue.600"
          py="10"
          fontSize="xl"
          fontWeight="bold"
          color="blue.600"
          rounded="md"
          _hover={{ bgColor: "blue.50" }}
        >
          Poliklinik
        </Center>
        <Center
          as={Link}
          to={`${path}/radiology`}
          border="2px"
          borderColor="blue.600"
          py="10"
          fontSize="xl"
          fontWeight="bold"
          color="blue.600"
          rounded="md"
          _hover={{ bgColor: "blue.50" }}
        >
          Radiology
        </Center>
        <Center
          as={Link}
          to={`${path}/pharmacy`}
          border="2px"
          borderColor="blue.600"
          py="10"
          fontSize="xl"
          fontWeight="bold"
          color="blue.600"
          rounded="md"
          _hover={{ bgColor: "blue.50" }}
        >
          Pharmacy
        </Center>
        <Center
          as={Link}
          to={`${path}/igd`}
          border="2px"
          borderColor="blue.600"
          py="10"
          fontSize="xl"
          fontWeight="bold"
          color="blue.600"
          rounded="md"
          _hover={{ bgColor: "blue.50" }}
        >
          IGD
        </Center>
        <Center
          as={Link}
          to={`${path}/ugd`}
          border="2px"
          borderColor="blue.600"
          py="10"
          fontSize="xl"
          fontWeight="bold"
          color="blue.600"
          rounded="md"
          _hover={{ bgColor: "blue.50" }}
        >
          UGD
        </Center>
        <Center
          as={Link}
          to={`${path}/ot`}
          border="2px"
          borderColor="blue.600"
          py="10"
          fontSize="xl"
          fontWeight="bold"
          color="blue.600"
          rounded="md"
          _hover={{ bgColor: "blue.50" }}
        >
          OT
        </Center>
        <Center
          as={Link}
          to={`${path}/nursing`}
          border="2px"
          borderColor="blue.600"
          py="10"
          fontSize="xl"
          fontWeight="bold"
          color="blue.600"
          rounded="md"
          _hover={{ bgColor: "blue.50" }}
        >
          Nursing
        </Center>
        <Center
          as={Link}
          to={`${path}/pregnancy`}
          border="2px"
          borderColor="blue.600"
          py="10"
          fontSize="xl"
          fontWeight="bold"
          color="blue.600"
          rounded="md"
          _hover={{ bgColor: "blue.50" }}
        >
          Pregnancy
        </Center>
      </SimpleGrid>
    </>
  );
};

export default DepartmentList;
