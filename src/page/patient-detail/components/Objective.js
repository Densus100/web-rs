import React from "react";
import {
  Box,
  Heading,
  SimpleGrid,
  FormControl,
  FormLabel,
  InputGroup,
  Flex,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  InputRightAddon,
} from "@chakra-ui/react";

export const Objective = () => {
  return (
    <Box bgColor="gray.100" boxShadow="md" px="10" py="6" rounded="md" mb="8">
      <Heading as="h3" mb="6">
        Objective (O)
      </Heading>
      <Box
        border="1px"
        borderColor="gray.300"
        p="4"
        rounded="md"
        boxShadow="sm"
        bgColor="white"
      >
        <Heading
          as="h4"
          mb="4"
          fontSize="lg"
          color="gray.600"
          fontWeight="bold"
        >
          Vital Sign
        </Heading>
        <SimpleGrid columns={4} gap="10" mb="5">
          <FormControl id="bloodPressure">
            <FormLabel color="gray.700">Blood Pressure</FormLabel>
            <InputGroup size="sm">
              <Flex alignItems="center">
                <NumberInput defaultValue={110} max={300} min={0} size="sm">
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <Box as="span" fontWeight="bold" mx="2">
                  /
                </Box>
                <NumberInput defaultValue={70} max={300} min={0} size="sm">
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <InputRightAddon children="mmHg" />
              </Flex>
            </InputGroup>
          </FormControl>
          <FormControl id="pulseRate">
            <FormLabel color="gray.700">Pulse Rate</FormLabel>
            <InputGroup size="sm">
              <NumberInput defaultValue={70} max={300} min={0}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <InputRightAddon children="X/mnt" />
            </InputGroup>
          </FormControl>
          <FormControl id="respiratoryRate">
            <FormLabel color="gray.700">Respiratory Rate</FormLabel>
            <InputGroup size="sm">
              <NumberInput defaultValue={70} max={300} min={0}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <InputRightAddon children="X/mnt" />
            </InputGroup>
          </FormControl>
          <FormControl id="sp02">
            <FormLabel color="gray.700">SpO2</FormLabel>
            <InputGroup size="sm">
              <NumberInput defaultValue={70} max={300} min={0}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <InputRightAddon children="%" />
            </InputGroup>
          </FormControl>
        </SimpleGrid>
        <SimpleGrid columns={4} gap="10">
          <FormControl id="temperature">
            <FormLabel color="gray.700">Temperature</FormLabel>
            <InputGroup size="sm">
              <NumberInput defaultValue={70} max={300} min={0}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <InputRightAddon children={`\u00b0 C`} />
            </InputGroup>
          </FormControl>
          <FormControl id="weight">
            <FormLabel color="gray.700">Weight</FormLabel>
            <InputGroup size="sm">
              <NumberInput defaultValue={0} max={300} min={0}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <InputRightAddon children="kg" />
            </InputGroup>
          </FormControl>
          <FormControl id="height">
            <FormLabel color="gray.700">Heigth</FormLabel>
            <InputGroup size="sm">
              <NumberInput defaultValue={0} max={300} min={0}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <InputRightAddon children="cm" />
            </InputGroup>
          </FormControl>
          <FormControl id="headCircumference">
            <FormLabel color="gray.700">Head Circumference</FormLabel>
            <InputGroup size="sm">
              <NumberInput defaultValue={0} max={300} min={0}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <InputRightAddon children="cm" />
            </InputGroup>
          </FormControl>
        </SimpleGrid>
      </Box>
    </Box>
  );
};
