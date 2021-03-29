import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  CheckboxGroup,
  HStack,
  Checkbox,
  Flex,
} from "@chakra-ui/react";
import slugify from "slugify";

export const AddRouteModal = ({ isOpen, onClose }) => {
  const [name, setName] = React.useState("");

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create New Route</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box as="form">
            <FormControl id="role" mb="4">
              <FormLabel>Role</FormLabel>
              <Select>
                <option value="">Pilih Role</option>
                <option value="dokter">Dokter</option>
                <option value="pasien">Pasien</option>
                <option value="perawat">Perawat</option>
                <option value="admin">Admin</option>
              </Select>
            </FormControl>
            <FormControl id="menu" mb="4">
              <FormLabel>Menu</FormLabel>
              <Select>
                <option value="">Pilih Menu</option>
                <option value="pasien">Pasien</option>
                <option value="admin-smart-rs">Admin Smart RS</option>
                <option value="role">Role</option>
              </Select>
            </FormControl>
            <FormControl id="access" mb="4">
              <FormLabel>Access</FormLabel>
              <CheckboxGroup colorScheme="green" defaultValue={[]}>
                <Flex justifyContent="space-around">
                  <Checkbox value="create">Create</Checkbox>
                  <Checkbox value="read">Read</Checkbox>
                  <Checkbox value="update">Update</Checkbox>
                  <Checkbox value="delete">Delete</Checkbox>
                </Flex>
              </CheckboxGroup>
            </FormControl>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} onClick={onClose} variant="ghost">
            Close
          </Button>
          <Button colorScheme="blue">Create</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
