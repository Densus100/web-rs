import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { HiPlus, HiPencilAlt, HiOutlineTrash } from "react-icons/hi";

export const Subjective = () => {
  return (
    <Box bgColor="gray.100" boxShadow="md" px="10" py="6" rounded="md" mb="8">
      <Heading as="h3" mb="6">
        Subjective (S)
      </Heading>
      <VStack align="start" spacing="10">
        <Box w="full">
          <TableSymptom />
        </Box>
      </VStack>
    </Box>
  );
};

const TableSymptom = () => {
  return (
    <Box>
      <Flex mb="4" justify="space-between" align="center">
        <Heading fontSize="lg" fontWeight="semibold">
          Sign & Symptoms
        </Heading>
        <Button colorScheme="blue" leftIcon={<HiPlus />}>
          Add Sign & Symptom
        </Button>
      </Flex>
      <Table variant="simple" bg="white" rounded="md" boxShadow="md" mb="6">
        <Thead bg="blue.500">
          <Tr>
            <Th color="white">Sign & Symptom</Th>
            <Th color="white">Description</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Sign 1</Td>
            <Td>Description 1</Td>
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
            <Td>Sign 2</Td>
            <Td>Description 2</Td>
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
            <Td>Sign 3</Td>
            <Td>Description 3</Td>
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
