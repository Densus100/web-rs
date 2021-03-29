import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";

export const CancelBookingModal = ({ isOpen, onClose }) => {
  return (
    <AlertDialog isOpen={isOpen} onClose={onClose}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Cancel Booking
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure to cancel this booking?
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button colorScheme="blue" onClick={onClose} ml={3}>
              Cancel Booking
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
