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
  Select,
} from "@chakra-ui/react";

export const EditMenuDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Edit Menu</DrawerHeader>

          <DrawerBody>
            <Box as="form">
              <FormControl id="name" mb="4">
                <FormLabel>Name</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="alias" mb="4">
                <FormLabel>Alias</FormLabel>
                <Input type="text" disabled />
              </FormControl>
              <FormControl id="parent" mb="4">
                <FormLabel>Parent</FormLabel>
                <Select>
                  <option value="">Select Parent</option>
                  <option value="admin-smart-rs">Admin Smart RS</option>
                  <option value="pasien">Pasien</option>
                </Select>
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
