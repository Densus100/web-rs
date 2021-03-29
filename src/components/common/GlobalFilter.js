import React from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { HiOutlineSearch } from "react-icons/hi";

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <InputGroup mb="4" maxW="md" mr="4">
      <InputLeftElement
        pointerEvents="none"
        children={<HiOutlineSearch color="gray.300" />}
      />
      <Input
        type="tel"
        placeholder="Search"
        variant="filled"
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </InputGroup>
  );
};
