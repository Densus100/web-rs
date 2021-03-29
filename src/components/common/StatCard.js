import React from "react";
import { Stat, StatLabel, StatNumber } from "@chakra-ui/react";

const StatCard = ({ data }) => {
  const { label, value } = data;
  return (
    <Stat px={{ base: 4, sm: 6 }} py="5" bg="white" shadow="base" rounded="lg">
      <StatLabel fontWeight="medium" isTruncated color="gray.500">
        {label}
      </StatLabel>
      <StatNumber fontSize="3xl" fontWeight="medium" color="gray.900">
        {value}
      </StatNumber>
    </Stat>
  );
};

export default StatCard;
