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
} from "@chakra-ui/react";

export const EditRoomDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Edit Room</DrawerHeader>

          <DrawerBody>
            <Box as="form">
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
