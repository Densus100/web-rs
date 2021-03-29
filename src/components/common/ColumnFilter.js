import React from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { HiOutlineSearch } from "react-icons/hi";

export const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;

  return (
    <InputGroup mb="4" maxW="md">
      <InputLeftElement
        pointerEvents="none"
        children={<HiOutlineSearch color="gray.300" />}
      />
      <Input
        type="tel"
        placeholder="Search"
        variant="filled"
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </InputGroup>
  );
};
