import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Box,
  Button,
  VisuallyHidden,
  Image,
  useDisclosure,
  Collapse,
  useToast,
} from "@chakra-ui/react";

export const ProfileDropdown = () => {
  const toast = useToast();
  const history = useHistory();
  const { isOpen, onToggle } = useDisclosure();

  const handleLogout = () => {
    toast({
      title: "Success",
      description: `Anda berhasil logout`,
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    history.push("/login");
  };

  return (
    <Box ml="3" position="relative">
      <Box>
        <Button
          type="button"
          maxW="xs"
          bgColor="white"
          display="flex"
          alignItems="center"
          fontSize="sm"
          rounded="full"
          id="user-menu"
          p="0"
          onClick={onToggle}
        >
          <VisuallyHidden>Open user menu</VisuallyHidden>
          <Image
            h="8"
            w="8"
            rounded="full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
            alt=""
          />
        </Button>
      </Box>
      <Collapse in={isOpen} animateOpacity>
        <Box
          // style={{ transformOrigin: "top right" }}
          position="absolute"
          right="0"
          mt="2"
          w="48"
          rounded="md"
          shadow="lg"
          py="1"
          bgColor="white"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu"
        >
          <Box
            display="block"
            as={Link}
            to="/my-profile"
            px="4"
            py="2"
            fontSize="sm"
            color="gray.700"
            _hover={{ bgColor: "gray.100" }}
            role="menuitem"
          >
            Your Profile
          </Box>

          <Box
            display="block"
            as={Link}
            to="/settings"
            px="4"
            py="2"
            fontSize="sm"
            color="gray.700"
            _hover={{ bgColor: "gray.100" }}
            role="menuitem"
          >
            Settings
          </Box>

          <Box
            display="block"
            as="button"
            px="4"
            py="2"
            fontSize="sm"
            color="gray.700"
            _hover={{ bgColor: "gray.100" }}
            role="menuitem"
            w="full"
            textAlign="left"
            onClick={handleLogout}
          >
            Sign out
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};
