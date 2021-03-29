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
  VStack,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";

export const RescheduleBookingModal = ({ isOpen, onClose, options }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (value) => {
    console.log(value);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay />
      <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
        <ModalHeader>Re-Schedule</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <VStack>
              <FormControl id="name">
                <FormLabel>Patient Name</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="services">
                <FormLabel>Layanan</FormLabel>
                <Select>
                  <option>Pilih Layanan</option>
                  <option>Layanan 2</option>
                  <option>Layanan 3</option>
                </Select>
              </FormControl>
              <SimpleGrid columns={2} w="full">
                <FormControl id="date">
                  <FormLabel>Date</FormLabel>
                  <Input
                    as={DatePicker}
                    dateFormat="dd-MM-yyyy"
                    minDate={new Date()}
                    w="72"
                  ></Input>
                </FormControl>
                <FormControl id="time">
                  <FormLabel>Time</FormLabel>
                  <Select>
                    <option>Choose Time</option>
                    <option>Time 1</option>
                    <option>Time 2</option>
                  </Select>
                </FormControl>
              </SimpleGrid>
              <FormControl id="doctor">
                <FormLabel>Doctor</FormLabel>
                <Select>
                  <option>Pilih Doctor</option>
                  <option>Doctor 1</option>
                  <option>Doctor 2</option>
                </Select>
              </FormControl>
              <FormControl id="paymentMethod">
                <FormLabel>Metode Bayar</FormLabel>
                <Select>
                  <option>Pilih metode bayar</option>
                  <option>Metode 1</option>
                  <option>Metode 2</option>
                </Select>
              </FormControl>
            </VStack>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" type="submit">
            Done
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
