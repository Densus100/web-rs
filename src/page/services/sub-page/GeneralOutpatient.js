import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { HiPencilAlt, HiTrash } from "react-icons/hi";

// import DataTable from "../../../components/common/DataTable";
import FilteringTable from "../../../components/common/FilteringTable";
import {
  AddScheduleModal,
  DeleteScheduleAlert,
  EditScheduleDrawer,
} from "../../../components/services/general-outpatient";

const GeneralOutpatient = () => {
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();

  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();

  const {
    isOpen: isAlertOpen,
    onOpen: onAlertOpen,
    onClose: onAlertClose,
  } = useDisclosure();

  const handleEdit = useCallback(
    (id) => {
      onDrawerOpen();
    },
    [onDrawerOpen]
  );

  const handleDelete = useCallback(
    (id) => {
      onAlertOpen();
    },
    [onAlertOpen]
  );

  const data = React.useMemo(
    () => [
      {
        no: 1,
        code: "1234",
        personInCharge: "dr. Robbert",
        department: "poliklinik",
        subservice: "Umum",
        room: "R123",
        schedule: {
          day: ["Senin", "Selasa"],
          startTime: "07.00",
          endTime: "10.00",
        },
        id: "1234",
      },
      {
        no: 1,
        code: "1234",
        personInCharge: "dr. Sarah",
        department: "poliklinik",
        subservice: "Umum",
        room: "R124",
        schedule: {
          day: ["Senin", "Selasa", "Rabu"],
          startTime: "08.00",
          endTime: "11.00",
        },
        id: "1234",
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
        Header: "Code",
        accessor: "code",
      },
      {
        Header: "Layanan",
        accessor: "subservice",
      },
      {
        Header: "Department",
        accessor: "department",
      },
      {
        Header: "Ruangan",
        accessor: "room",
      },
      {
        Header: "Staff Penanggung Jawab",
        accessor: "personInCharge",
      },
      {
        Header: "Jadwal",
        accessor: "schedule",
        Cell: ({ value }) => (
          <Box>
            <Box>{value.day.join(", ")}</Box>
            <Box>
              {value.startTime} - {value.endTime}
            </Box>
          </Box>
        ),
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
              onClick={() => handleEdit(value)}
            />
            <IconButton
              aria-label="Delete"
              colorScheme="red"
              icon={<HiTrash />}
              onClick={() => handleDelete(value)}
            />
          </HStack>
        ),
      },
    ],
    [handleEdit, handleDelete]
  );

  return (
    <Box py="4" px="6">
      <AddScheduleModal onClose={onModalClose} isOpen={isModalOpen} />
      <EditScheduleDrawer isOpen={isDrawerOpen} onClose={onDrawerClose} />
      <DeleteScheduleAlert isOpen={isAlertOpen} onClose={onAlertClose} />
      <Box>
        <Flex justify="space-between" align="center" mb="4">
          <Heading fontSize="3xl">General Outpatient</Heading>
        </Flex>
        <FilteringTable
          columns={columns}
          data={data}
          action={
            <Button
              leftIcon={<FaPlus />}
              colorScheme="green"
              onClick={onModalOpen}
            >
              Tambah Spesialisasi
            </Button>
          }
        />
      </Box>
    </Box>
  );
};

export default GeneralOutpatient;
