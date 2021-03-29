import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
  Box,
  FormControl,
  FormLabel,
  CheckboxGroup,
  Checkbox,
  VStack,
} from "@chakra-ui/react";
import TimePicker from "react-time-picker";

export const EditScheduleDrawer = ({ isOpen, onClose, btnRef }) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Edit Schedule</DrawerHeader>

          <DrawerBody>
            <Box as="form">
              <FormControl id="staff" mb="4">
                <FormLabel>Staff</FormLabel>
                <Input type="staff" />
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
                  <VStack align="start">
                    <Checkbox value="Senin">Senin</Checkbox>
                    <Checkbox value="Selasa">Selasa</Checkbox>
                    <Checkbox value="Rabu">Rabu</Checkbox>
                    <Checkbox value="Kamis">Kamis</Checkbox>
                    <Checkbox value="Jumat">Jumat</Checkbox>
                  </VStack>
                </CheckboxGroup>
              </FormControl>
              <VStack>
                <FormControl id="startTime" mb="4">
                  <FormLabel>Jam Masuk</FormLabel>
                  <TimePicker />
                </FormControl>
                <FormControl id="endTime" mb="4">
                  <FormLabel>Jam Keluar</FormLabel>
                  <TimePicker />
                </FormControl>
              </VStack>
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
