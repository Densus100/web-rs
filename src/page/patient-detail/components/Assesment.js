import React from "react";
import {
  Box,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Select,
  Textarea,
} from "@chakra-ui/react";

export const Assesment = () => {
  return (
    <Box bgColor="gray.100" boxShadow="md" px="10" py="6" rounded="md" mb="8">
      <Heading as="h3" mb="6">
        Assesment (A)
      </Heading>
      <VStack align="start">
        <FormControl id="icd10" maxW="xs">
          <FormLabel color="gray.700">ICD-10</FormLabel>
          <Select bgColor="white" />
        </FormControl>
        <FormControl id="doctorNotes" maxW="2xl">
          <FormLabel color="gray.700">Doctor's Notes</FormLabel>
          <Textarea rows="6" bgColor="white" />
        </FormControl>
      </VStack>
    </Box>
  );
};
