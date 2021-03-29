import React from "react";
import {
  Box,
  Heading,
  VStack,
  HStack,
  Button,
  Flex,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  IconButton,
  FormControl,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import { HiPlus, HiPencilAlt, HiOutlineTrash } from "react-icons/hi";

export const Plan = () => {
  return (
    <Box bgColor="gray.100" boxShadow="md" px="10" py="6" rounded="md" mb="8">
      <Heading as="h3" mb="6">
        Plan (P)
      </Heading>
      <VStack align="start" spacing="10">
        <Box>
          <Heading fontSize="lg" fontWeight="semibold" mb="4">
            Procedure
          </Heading>
          <HStack>
            <Button colorScheme="blue">Request Lab Test</Button>
            <Button colorScheme="blue">Request Radiology Test</Button>
            <Button colorScheme="blue">Follow up Appointment</Button>
          </HStack>
        </Box>
        <Box>
          <FormControl id="procedureResult" maxW="2xl">
            <FormLabel color="gray.700">Procedure Result</FormLabel>
            <Textarea rows="6" cols="80" bgColor="white" />
          </FormControl>
        </Box>
        <Box w="full">
          <TablePrescription />
        </Box>
      </VStack>
    </Box>
  );
};

const TablePrescription = () => {
  return (
    <Box>
      <Flex mb="4" justify="space-between" align="center">
        <Heading fontSize="lg" fontWeight="semibold">
          Prescription
        </Heading>
        <Button colorScheme="blue" leftIcon={<HiPlus />}>
          Add New Prescription
        </Button>
      </Flex>
      <Table variant="simple" bg="white" rounded="md" boxShadow="md" mb="6">
        <Thead bg="blue.500">
          <Tr>
            <Th color="white">Item</Th>
            <Th color="white">Quantity</Th>
            <Th color="white">Frequency</Th>
            <Th color="white">Description</Th>
            <Th color="white">Eat</Th>
            <Th color="white">Routine</Th>
            <Th color="white">Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Paracetamol</Td>
            <Td>50 mg</Td>
            <Td>3 times/day</Td>
            <Td>Description...</Td>
            <Td>After</Td>
            <Td>Yes</Td>
            <Td>
              <HStack spacing="2">
                <IconButton aria-label="edit button" icon={<HiPencilAlt />} />
                <IconButton
                  colorScheme="red"
                  aria-label="edit button"
                  icon={<HiOutlineTrash />}
                />
              </HStack>
            </Td>
          </Tr>
          <Tr>
            <Td>Paracetamol</Td>
            <Td>50 mg</Td>
            <Td>3 times/day</Td>
            <Td>Description...</Td>
            <Td>After</Td>
            <Td>Yes</Td>
            <Td>
              <HStack spacing="2">
                <IconButton aria-label="edit button" icon={<HiPencilAlt />} />
                <IconButton
                  colorScheme="red"
                  aria-label="edit button"
                  icon={<HiOutlineTrash />}
                />
              </HStack>
            </Td>
          </Tr>
          <Tr>
            <Td>Paracetamol</Td>
            <Td>50 mg</Td>
            <Td>3 times/day</Td>
            <Td>Description...</Td>
            <Td>After</Td>
            <Td>Yes</Td>
            <Td>
              <HStack spacing="2">
                <IconButton aria-label="edit button" icon={<HiPencilAlt />} />
                <IconButton
                  colorScheme="red"
                  aria-label="edit button"
                  icon={<HiOutlineTrash />}
                />
              </HStack>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};
