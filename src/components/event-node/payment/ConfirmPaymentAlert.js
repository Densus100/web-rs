import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";

import React from "react";

export const ConfirmPaymentAlert = ({ isOpen, onClose, selectedId }) => {
  const handleCheckIn = () => {
    console.log(`User ${selectedId} sudah bayar.`);
    onClose();
  };

  return (
    <AlertDialog isOpen={isOpen} onClose={onClose}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Payment
          </AlertDialogHeader>

          <AlertDialogBody>Apakah pasien sudah bayar?</AlertDialogBody>

          <AlertDialogFooter>
            <Button onClick={onClose}>Cancel</Button>
            <Button colorScheme="green" ml={3} onClick={handleCheckIn}>
              Sudah Bayar
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
