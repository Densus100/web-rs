import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  Box,
} from "@chakra-ui/react";

import React from "react";

export const ConfirmCheckinAlert = ({ isOpen, onClose, selectedId }) => {
  const handleCheckIn = () => {
    console.log(`User ${selectedId} checked in.`);
    onClose();
  };

  return (
    <AlertDialog isOpen={isOpen} onClose={onClose}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Check In
          </AlertDialogHeader>
          <AlertDialogBody>
            <Box fontWeight="bold" textAlign="center" fontSize="2xl" py="6">
              Confirm patient?
            </Box>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button onClick={onClose}>Cancel</Button>
            <Button colorScheme="green" ml={3} onClick={handleCheckIn}>
              Confirm
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
