import React from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Avatar,
} from "@chakra-ui/react";
import { HiPencilAlt } from "react-icons/hi";

export const PatientProfile = () => {
  return (
    <SimpleGrid columns={2} gap="10">
      <Box rounded={{ md: "lg" }} bg="white" shadow="base">
        <Flex align="center" justify="space-between" px="6" py="4">
          <Text as="h3" fontWeight="bold" fontSize="lg">
            Contact Info
          </Text>
          <Button variant="outline" minW="20" leftIcon={<HiPencilAlt />}>
            Edit
          </Button>
        </Flex>
        <Divider />
        <Box>
          <Flex
            as="dl"
            direction={{ base: "column", sm: "row" }}
            px="6"
            py="4"
            _even="gray.50"
          >
            <Box as="dt" flexBasis="25%">
              Photo
            </Box>
            <Box as="dd" flex="1" fontWeight="semibold">
              <Avatar
                size="2xl"
                name="Segun Adebayo"
                src="https://bit.ly/sage-adebayo"
              />
            </Box>
          </Flex>
          <Description title="Name" value="John Doe" />
          <Description title="Email" value="johndoe@gmail.com" />
          <Description title="Patient Type" value="Umum" />
          <Description title="Phone" value="081234567890" />
          <Description title="Nationality" value="Indonesia" />
        </Box>
      </Box>
      <Box rounded={{ md: "lg" }} bg="white" shadow="base">
        <Flex align="center" justify="space-between" px="6" py="4">
          <Text as="h3" fontWeight="bold" fontSize="lg">
            Health Info
          </Text>
          <Button variant="outline" minW="20" leftIcon={<HiPencilAlt />}>
            Edit
          </Button>
        </Flex>
        <Divider />
        <Box>
          <Description title="Height" value="175 cm" />
          <Description title="Weight" value="60 kg" />
          <Description title="Date of Birth" value="01-05-1980" />
          <Description title="Blood Type" value="O" />
          <Description title="Gender" value="Male" />
          <Description title="Medical History" value="Diabetes" />
          <Description title="Family History" value="Diabetes" />
          <Description title="Drug Allergies" value="-" />
          <Description title="Food Allergies" value="Egg, Milk" />
        </Box>
      </Box>
    </SimpleGrid>
  );
};

const Description = ({ title, value }) => {
  return (
    <Flex
      as="dl"
      direction={{ base: "column", sm: "row" }}
      px="6"
      py="4"
      _even="gray.50"
    >
      <Box as="dt" flexBasis="25%">
        {title}
      </Box>
      <Box as="dd" flex="1" fontWeight="semibold">
        {value}
      </Box>
    </Flex>
  );
};
