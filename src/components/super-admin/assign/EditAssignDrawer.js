import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Box,
  FormControl,
  FormLabel,
  Select,
  CheckboxGroup,
  Flex,
  Checkbox,
} from "@chakra-ui/react";

export const EditAssignDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Edit Route</DrawerHeader>

          <DrawerBody>
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
