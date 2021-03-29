import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { Assesment, Objective, Plan, Subjective } from "./components";

export const Soap = () => {
  return (
    <Box>
      {/* Subjective */}
      <Subjective />

      {/* Objective */}
      <Objective />

      {/* Assesment */}
      <Assesment />

      {/* Plan */}
      <Plan />

      <Box textAlign="right" px="8" pb="10">
        <Button colorScheme="blue" size="lg">
          Submit SOAP
        </Button>
      </Box>
    </Box>
  );
};
