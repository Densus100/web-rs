import React from "react";
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
import QRCode from "qrcode.react";

export const CheckInModal = ({ isOpen, onClose }) => {
  return (
    <AlertDialog isOpen={isOpen} onClose={onClose}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Check In
          </AlertDialogHeader>

          <AlertDialogBody>
            Apakah anda ingin mengubah status pasien menjadi check-in?
            <Box mt="2">
              <QRCode value="http://google.com" />
            </Box>
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button onClick={onClose}>Cancel</Button>
            <Button colorScheme="green" onClick={onClose} ml={3}>
              Check In
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
