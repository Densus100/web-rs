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
  CheckboxGroup,
  HStack,
  Checkbox,
} from "@chakra-ui/react";
import TimePicker from "react-time-picker";

export const AddScheduleModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Schedule</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box as="form">
            <FormControl id="staff" mb="4">
              <FormLabel>Staff</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="service" mb="4">
              <FormLabel>Layanan</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="room" mb="4">
              <FormLabel>Ruangan</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="workingDays" mb="4">
              <FormLabel>Hari kerja</FormLabel>
              <CheckboxGroup colorScheme="blue" defaultValue={[]}>
                <HStack>
                  <Checkbox value="Senin">Senin</Checkbox>
                  <Checkbox value="Selasa">Selasa</Checkbox>
                  <Checkbox value="Rabu">Rabu</Checkbox>
                  <Checkbox value="Kamis">Kamis</Checkbox>
                  <Checkbox value="Jumat">Jumat</Checkbox>
                </HStack>
              </CheckboxGroup>
            </FormControl>
            <HStack>
              <FormControl id="startTime" mb="4">
                <FormLabel>Jam Masuk</FormLabel>
                <TimePicker />
              </FormControl>
              <FormControl id="endTime" mb="4">
                <FormLabel>Jam Keluar</FormLabel>
                <TimePicker />
              </FormControl>
            </HStack>
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
