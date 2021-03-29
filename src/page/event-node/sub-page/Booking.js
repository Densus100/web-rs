import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  SimpleGrid,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { HiPencilAlt, HiTrash } from "react-icons/hi";
import { FaPlus } from "react-icons/fa";

import FilteringTable from "../../../components/common/FilteringTable";
import {
  AddBookingModal,
  DeleteBookingAlert,
  RescheduleBookingModal,
  CancelBookingModal,
  CheckInModal,
  BookingDetailModal,
} from "../../../components/event-node/booking";

const Booking = () => {
  // const [selectedBooking, setSelectedBooking] = React.useState(null);

  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();

  const {
    isOpen: isRescheduleOpen,
    onOpen: onRescheduleOpen,
    onClose: onRescheduleClose,
  } = useDisclosure();

  const {
    isOpen: isCheckInOpen,
    onOpen: onCheckInOpen,
    onClose: onCheckInClose,
  } = useDisclosure();

  const {
    isOpen: isDeactiveOpen,
    onOpen: onDeactiveOpen,
    onClose: onDeactiveClose,
  } = useDisclosure();

  const {
    isOpen: isCancelOpen,
    onOpen: onCancelOpen,
    onClose: onCancelClose,
  } = useDisclosure();

  const {
    isOpen: isDetailOpen,
    onOpen: onDetailOpen,
    onClose: onDetailClose,
  } = useDisclosure();

  // const handleEdit = useCallback(
  //   (id) => {
  //     onDrawerOpen();
  //   },
  //   [onDrawerOpen]
  // );

  // const handleDelete = useCallback(
  //   (id) => {
  //     onAlertOpen();
  //   },
  //   [onAlertOpen]
  // );

  const handleAddBooking = (type) => {
    onModalOpen();
  };

  const data = React.useMemo(
    () => [
      {
        no: 1,
        code: "BCO12HFL34",
        name: "John Doe",
        service: "Cek Darah",
        dpjp: "dr. Rudy",
        schedule: {
          day: "12 Agustus 2020",
          time: "10:00 AM",
        },
        status: "Booking",
        id: "BCO12HFL34",
      },
      {
        no: 2,
        code: "BCO12HFLT2",
        name: "Jane Doe",
        service: "Imaging",
        dpjp: "dr. Anwar",
        schedule: {
          day: "12 Agustus 2020",
          time: "11:00 AM",
        },
        status: "Checkin",
        id: "BCO12HFLT2",
      },
      {
        no: 2,
        code: "BCO12HFLT2",
        name: "Jane Doe",
        service: "Pemeriksaan Dokter",
        dpjp: "dr. Sarah",
        schedule: {
          day: "12 Agustus 2020",
          time: "09:00 AM",
        },
        status: "Booking",
        id: "BCO12HFLT2",
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
        Header: "Kode booking",
        accessor: "code",
      },
      {
        Header: "Nama Pasien",
        accessor: "name",
      },
      {
        Header: "Layanan",
        accessor: "service",
      },
      {
        Header: "Jadwal",
        accessor: "schedule",
        Cell: ({ value }) => (
          <Box>
            <Text fontWeight="semibold">{value.day}</Text>
            <Text>{value.time}</Text>
          </Box>
        ),
      },
      {
        Header: "DPJP",
        accessor: "dpjp",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => {
          let color = "gray";
          if (value === "Booking") {
            color = "yellow";
          }
          if (value === "Checkin") {
            color = "green";
          }

          return <Badge colorScheme={color}>{value}</Badge>;
        },
      },
      {
        Header: "Action",
        accessor: "id",
        Cell: ({ value }) => (
          <SimpleGrid columns={3} gap="3">
            <Button
              variant="link"
              size="sm"
              colorScheme="blue"
              onClick={onDetailOpen}
            >
              View Detail
            </Button>
            <Button
              variant="link"
              size="sm"
              colorScheme="green"
              onClick={onCheckInOpen}
            >
              Checkin
            </Button>
            <Button
              variant="link"
              size="sm"
              colorScheme="orange"
              onClick={onRescheduleOpen}
            >
              Re-Schedule
            </Button>
            <Button variant="link" size="sm" onClick={onCancelOpen}>
              Cancel
            </Button>
            <Button
              variant="link"
              size="sm"
              colorScheme="red"
              onClick={onDeactiveOpen}
            >
              Deactive
            </Button>
          </SimpleGrid>
        ),
      },
    ],
    []
  );

  // const doctorsList = [
  //   {
  //     id: 1,
  //     name: "dr. Bob",
  //     time: "07:00 - 10:00",
  //   },
  //   {
  //     id: 2,
  //     name: "dr. Alice",
  //     time: "07:00 - 10:00",
  //   },
  //   {
  //     id: 3,
  //     name: "dr. Sarah",
  //     time: "07:00 - 10:00",
  //   },
  // ];

  // const bloodLabList = [
  //   {
  //     id: 1,
  //     name: "Ruang A",
  //     time: "10:00 - 11:00",
  //   },
  //   {
  //     id: 2,
  //     name: "Ruang A",
  //     time: "11:00 - 12:00",
  //   },
  //   {
  //     id: 3,
  //     name: "Ruang A",
  //     time: "12:00 - 13:00",
  //   },
  //   {
  //     id: 4,
  //     name: "Ruang A",
  //     time: "13:00 - 14:00",
  //   },
  // ];

  // let options;
  // if (selectedBooking === "doctor") {
  //   options = doctorsList;
  // } else if (selectedBooking === "bloodLab") {
  //   options = bloodLabList;
  // }

  return (
    <Box py="4" px="6">
      <AddBookingModal
        onClose={onModalClose}
        isOpen={isModalOpen}
        // options={options}
      />
      <RescheduleBookingModal
        onClose={onRescheduleClose}
        isOpen={isRescheduleOpen}
      />
      <CheckInModal onClose={onCheckInClose} isOpen={isCheckInOpen} />
      <DeleteBookingAlert isOpen={isDeactiveOpen} onClose={onDeactiveClose} />
      <CancelBookingModal isOpen={isCancelOpen} onClose={onCancelClose} />
      <BookingDetailModal isOpen={isDetailOpen} onClose={onDetailClose} />
      <Box>
        <Flex justify="space-between" align="center" mb="4">
          <Heading fontSize="3xl">List Booking</Heading>
        </Flex>
        <FilteringTable
          columns={columns}
          data={data}
          action={
            <Button
              onClick={handleAddBooking}
              leftIcon={<FaPlus />}
              colorScheme="green"
            >
              Add New Booking
            </Button>
          }
        />
      </Box>
    </Box>
  );
};

export default Booking;
