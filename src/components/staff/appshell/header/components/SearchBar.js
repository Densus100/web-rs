import React from "react";
import { Box, Flex, VisuallyHidden, Image, Input } from "@chakra-ui/react";

export const SearchBar = () => {
  return (
    <Flex style={{ flex: "1 1 0%" }} maxW="xl" bgColor="gray.100" rounded="md">
      <Box as="form" w="full" display="flex">
        <VisuallyHidden htmlFor="search_field">Search</VisuallyHidden>
        <Flex alignItems="center" position="relative" w="full" color="gray.400">
          <Flex
            position="absolute"
            top="0"
            bottom="0"
            left="0"
            alignItems="center"
            ml="3"
          >
            <Image
              as="svg"
              h="5"
              w="5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </Image>
          </Flex>
          <Input
            id="search_field"
            display="block"
            w="full"
            pl="12"
            pr="3"
            py="2"
            // border="transparent"
            color="gray.900"
            _placeholder={{ color: "gray.500" }}
            placeholder="Search"
            type="search"
            name="search"
          />
        </Flex>
      </Box>
    </Flex>
  );
};
