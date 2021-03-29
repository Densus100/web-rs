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
} from "@chakra-ui/react";
import slugify from "slugify";

export const AddRoleModal = ({ isOpen, onClose }) => {
  const [name, setName] = React.useState("");

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create New Role</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box as="form">
            <FormControl id="name" mb="4">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl id="alias" mb="4">
              <FormLabel>Alias</FormLabel>
              <Input
                type="text"
                disabled
                value={slugify(name, { lower: true })}
              />
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
