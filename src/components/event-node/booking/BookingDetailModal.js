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
  Flex,
  Text,
  Divider,
  Avatar,
} from "@chakra-ui/react";
import QRCode from "qrcode.react";

export const BookingDetailModal = ({ isOpen, onClose, options }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box px="4">
            <Box
              rounded={{ md: "lg" }}
              bg="white"
              shadow="md"
              overflow="hidden"
              mb="4"
            >
              <Flex justify="space-between" align="center" p="6">
                <Flex align="center">
                  <Avatar
                    size="xl"
                    name="Segun Adebayo"
                    src="https://bit.ly/broken-link"
                    mr="4"
                  />
                  <Box>
                    <Text fontWeight="bold" fontSize="2xl">
                      Zahrina Anwar
                    </Text>
                    <Text fontSize="lg" fontWeight="semibold" color="gray.600">
                      Reg No: QWE123
                    </Text>
                  </Box>
                </Flex>
                <Box>
                  <QRCode value="http://google.com" />
                </Box>
              </Flex>
            </Box>
            <Box
              rounded={{ md: "lg" }}
              bg="white"
              shadow="md"
              overflow="hidden"
              mb="4"
            >
              <Flex
                align="center"
                justify="space-between"
                px="6"
                py="4"
                bgColor="gray.200"
              >
                <Text as="h3" fontWeight="bold" fontSize="lg">
                  Contact Details
                </Text>
              </Flex>
              <Divider />
              <Box>
                <Description title="Email" value="zahrina@gmail.com" />
                <Description title="Phone" value="0178998234" />
                <Description
                  title="Address"
                  value="Jalan Mutiara, 39218, Kuala Pilah, Perak"
                />
              </Box>
            </Box>
            <Box
              rounded={{ md: "lg" }}
              bg="white"
              shadow="md"
              overflow="hidden"
              mb="2"
            >
              <Flex
                align="center"
                justify="space-between"
                px="6"
                py="4"
                bgColor="gray.200"
              >
                <Text as="h3" fontWeight="bold" fontSize="lg">
                  Booking Details
                </Text>
              </Flex>
              <Divider />
              <Box>
                <Description title="Date" value="21 April 2013" />
                <Description title="Time" value="09:00-10:00 am" />
                <Description title="Ruangan" value="Lab Test" />
                <Description title="Metode Bayar" value="Credit Card" />
              </Box>
            </Box>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" type="submit" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const Description = ({ title, value }) => {
  return (
    <Flex
      as="dl"
      direction={{ base: "column", sm: "row" }}
      px="6"
      py="4"
      _even="gray.50"
    >
      <Box as="dt" flexBasis="25%">
        {title}
      </Box>
      <Box as="dd" flex="1" fontWeight="semibold">
        {value}
      </Box>
    </Flex>
  );
};
