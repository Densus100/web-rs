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

export const AddRoomModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent as="form">
        <ModalHeader>Add Room</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <FormControl id="roomName" mb="4">
              <FormLabel>Nama Ruangan</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="roomType" mb="4">
              <FormLabel>Tipe Ruangan</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="roomDescription" mb="4">
              <FormLabel>Keterangan</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="roomStatus" mb="4">
              <FormLabel>Status</FormLabel>
              <Input type="text" />
            </FormControl>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} onClick={onClose} variant="ghost">
            Close
          </Button>
          <Button colorScheme="blue">Add</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
