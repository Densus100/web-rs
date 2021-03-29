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
  HStack,
  Checkbox,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
export const EditApplicationDrawer = ({ isOpen, onClose }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (value) => {
    console.log(value);
  };

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Edit Role</DrawerHeader>

          <DrawerBody>
            <Box as="form" onSubmit={handleSubmit(onSubmit)}>
              <FormControl id="name" mb="8">
                <FormLabel>Application Name</FormLabel>
                <Input name="name" ref={register} />
              </FormControl>
              <FormControl id="platform" mb="8">
                <FormLabel>Platform</FormLabel>

                <HStack spacing="10">
                  <Checkbox value="website" name="platform[0]" ref={register}>
                    Website
                  </Checkbox>
                  <Checkbox value="mobile" name="platform[1]" ref={register}>
                    Mobile
                  </Checkbox>
                  <Checkbox value="desktop" name="platform[2]" ref={register}>
                    Desktop
                  </Checkbox>
                </HStack>
              </FormControl>
              <FormControl id="description" mb="8">
                <FormLabel>Description</FormLabel>
                <Textarea
                  placeholder="Description"
                  name="description"
                  ref={register}
                />
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
