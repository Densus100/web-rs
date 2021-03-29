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
  Select,
} from "@chakra-ui/react";
import ReactSelect from "react-select";

export const AddAssignModal = ({ isOpen, onClose }) => {
  const [name, setName] = React.useState("");

  const options = [
    {
      value: "John",
      label: "John",
    },
    {
      value: "Jane",
      label: "Jane",
    },
    {
      value: "Bob",
      label: "Bob",
    },
    {
      value: "Alice",
      label: "Alice",
    },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Assign</ModalHeader>
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
            <FormControl id="users" mb="4">
              <FormLabel>Users</FormLabel>
              <ReactSelect options={options} isMulti></ReactSelect>
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
