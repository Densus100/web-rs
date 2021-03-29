import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Heading,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  VStack,
  Text,
  Divider,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  HStack,
  IconButton,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { AiFillPrinter } from "react-icons/ai";
import QRCode from "qrcode.react";
import { useForm } from "react-hook-form";
import DataTable from "../../../components/common/DataTable";
import FilteringTable from "../../../components/common/FilteringTable";
import { HiPencilAlt } from "react-icons/hi";

const RegisterAccount = () => {
  const { register, handleSubmit } = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [qRCodeValue, setQRCodeValue] = useState({});

  const data = React.useMemo(
    () => [
      {
        no: 1,
        userId: "5874",
        name: "Mr.x",
        status: "1",
        id: "5874",
      },
      {
        no: 2,
        userId: "5435",
        name: "Alice",
        status: "2",
        id: "5435",
      },
      {
        no: 3,
        userId: "4590",
        name: "John",
        status: "2",
        id: "4590",
      },
      {
        no: 4,
        userId: "9827",
        name: "Jane",
        status: "1",
        id: "9827",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "No",
        accessor: "no",
        // isNumeric: true,
      },
      {
        Header: "User Id",
        accessor: "userId",
      },
      {
        Header: "Nama",
        accessor: "name",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Action",
        accessor: "id",
        Cell: ({ value }) => (
          <HStack>
            <IconButton
              aria-label="Edit"
              colorScheme="blackAlpha"
              icon={<HiPencilAlt />}
              // onClick={() => handleEdit(value)}
            />
            {/* <IconButton
              aria-label="Delete"
              colorScheme="red"
              icon={<HiTrash />}
              onClick={() => handleDelete(value)}
            /> */}
          </HStack>
        ),
      },
    ],
    []
  );

  const onSubmit = (value) => {
    console.log(value);
    setQRCodeValue(value);
    onOpen();
  };

  return (
    <Box py="4" px="6">
      <Modal
        size="lg"
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Patient Added</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              <QRCode value={JSON.stringify(qRCodeValue)} />
              <VStack ml="8" alignItems="start">
                <Box>
                  <Box fontWeight="semibold" fontSize="md" color="gray.600">
                    Reg ID
                  </Box>
                  <Box mt="-0.5" fontSize="lg" fontWeight="bold">
                    345716546
                  </Box>
                </Box>
                <Box>
                  <Box fontWeight="semibold" fontSize="md" color="gray.600">
                    Name
                  </Box>
                  <Box mt="-0.5" fontSize="lg" fontWeight="bold">
                    {qRCodeValue.name}
                  </Box>
                </Box>
              </VStack>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button leftIcon={<AiFillPrinter />}>Print</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Grid templateColumns="repeat(3, 1fr)">
        <GridItem colSpan={2}>
          <Flex justify="space-between" align="center" mb="4">
            <Heading fontSize="3xl">On site Registration</Heading>
          </Flex>
          <Box>
            <Box mr="10">
              <Box maxW="3xl">
                <Box as="form" onSubmit={handleSubmit(onSubmit)}>
                  <Box
                    rounded={{ md: "lg" }}
                    bg="white"
                    shadow="md"
                    overflow="hidden"
                    mb="8"
                  >
                    <Flex
                      align="center"
                      justify="space-between"
                      px="6"
                      py="4"
                      bgColor="gray.200"
                    >
                      <Text as="h3" fontWeight="bold" fontSize="lg">
                        Personal
                      </Text>
                    </Flex>
                    <Divider />
                    <Box>
                      <SimpleGrid
                        columns={2}
                        columnGap={6}
                        rowGap={6}
                        px="6"
                        pt="4"
                        pb="8"
                      >
                        <FormControl id="name">
                          <FormLabel>Full Name</FormLabel>
                          <Input type="text" name="name" ref={register} />
                        </FormControl>
                        <FormControl id="dateOfBirth">
                          <FormLabel>Date of Birth</FormLabel>
                          <Input
                            type="text"
                            name="dateOfBirth"
                            ref={register}
                          />
                        </FormControl>
                        <FormControl id="placeOfBirth">
                          <FormLabel>Place of Birth</FormLabel>
                          <Input
                            type="text"
                            name="placeOfBirth"
                            ref={register}
                          />
                        </FormControl>
                        <FormControl id="religion">
                          <FormLabel>Religion</FormLabel>
                          <Input type="text" name="religion" ref={register} />
                        </FormControl>
                        <FormControl id="gender">
                          <FormLabel>Gender</FormLabel>
                          <Input type="text" name="gender" ref={register} />
                        </FormControl>
                        <FormControl id="profession">
                          <FormLabel>Profession</FormLabel>
                          <Input type="text" name="profession" ref={register} />
                        </FormControl>
                        <FormControl id="maritalStatus">
                          <FormLabel>Marital Status</FormLabel>
                          <Input
                            type="text"
                            name="maritalStatus"
                            ref={register}
                          />
                        </FormControl>
                        <FormControl id="nationality">
                          <FormLabel>Nationality</FormLabel>
                          <Input
                            type="text"
                            name="nationality"
                            ref={register}
                          />
                        </FormControl>
                        <FormControl id="nik">
                          <FormLabel>NIK</FormLabel>
                          <Input type="text" name="nik" ref={register} />
                        </FormControl>
                        <FormControl id="passport-no">
                          <FormLabel>Passport No.</FormLabel>
                          <Input
                            type="text"
                            name="passport-no"
                            ref={register}
                          />
                        </FormControl>
                        <FormControl id="profession">
                          <FormLabel>Upload KTP</FormLabel>
                          <Input
                            type="file"
                            p="0"
                            py="0.5"
                            name="ktp"
                            ref={register}
                          ></Input>
                        </FormControl>
                      </SimpleGrid>
                    </Box>
                  </Box>
                  <Box
                    rounded={{ md: "lg" }}
                    bg="white"
                    shadow="md"
                    overflow="hidden"
                    mb="8"
                  >
                    <Flex
                      align="center"
                      justify="space-between"
                      px="6"
                      py="4"
                      bgColor="gray.200"
                    >
                      <Text as="h3" fontWeight="bold" fontSize="lg">
                        Contact
                      </Text>
                    </Flex>
                    <Divider />
                    <Box>
                      <SimpleGrid
                        columns={2}
                        columnGap={6}
                        rowGap={6}
                        px="6"
                        pt="4"
                        pb="8"
                      >
                        <FormControl id="phone">
                          <FormLabel>Phone Number</FormLabel>
                          <Input type="text" name="phone" ref={register} />
                        </FormControl>
                        <FormControl id="email">
                          <FormLabel>Email</FormLabel>
                          <Input type="text" name="email" ref={register} />
                        </FormControl>
                        <FormControl id="address">
                          <FormLabel>Address</FormLabel>
                          <Input type="text" name="address" ref={register} />
                        </FormControl>
                        <FormControl id="city">
                          <FormLabel>City</FormLabel>
                          <Input type="text" name="city" ref={register} />
                        </FormControl>
                      </SimpleGrid>
                    </Box>
                  </Box>
                  <Box textAlign="right" mb="10">
                    <Button
                      leftIcon={<FaPlus />}
                      type="submit"
                      colorScheme="green"
                      mr="2"
                    >
                      Add New
                    </Button>
                    <Button type="submit" colorScheme="blue">
                      Save
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Flex justify="space-between" align="center" mb="4">
            <Heading fontSize="3xl">Result</Heading>
          </Flex>
          <Box></Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default RegisterAccount;
