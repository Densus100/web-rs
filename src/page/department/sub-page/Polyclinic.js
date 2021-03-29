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
import { FaArrowLeft } from "react-icons/fa";
import { HiPencilAlt, HiTrash } from "react-icons/hi";

// import DataTable from "../../../components/common/DataTable";
import FilteringTable from "../../../components/common/FilteringTable";
import {
  AddRoomModal,
  EditRoomDrawer,
  DeleteRoomAlert,
} from "../../../components/department/polyclinic";

const Polyclinic = () => {
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
        roomName: "R123",
        type: "-",
        description: "Ruang Dokter",
        status: "aktif",
        id: "1234",
      },
      {
        no: 2,
        code: "1612",
        roomName: "R124",
        type: "-",
        description: "Ruang Dokter",
        status: "aktif",
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
        Header: "Nama Ruangan",
        accessor: "roomName",
      },
      {
        Header: "Tipe Ruangan",
        accessor: "type",
      },
      {
        Header: "Keterangan",
        accessor: "description",
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
    <Box py="4">
      <AddRoomModal onClose={onModalClose} isOpen={isModalOpen} />
      <EditRoomDrawer isOpen={isDrawerOpen} onClose={onDrawerClose} />
      <DeleteRoomAlert isOpen={isAlertOpen} onClose={onAlertClose} />
      <Box>
        <Button
          mb="4"
          as={Link}
          to="/dashboard/department"
          leftIcon={<FaArrowLeft />}
        >
          Department
        </Button>
        <Flex justify="space-between" align="center" mb="4">
          <Heading fontSize="3xl">Polyclinic</Heading>
          <Button onClick={onModalOpen}>Add Room</Button>
        </Flex>
        <FilteringTable columns={columns} data={data} />
      </Box>
    </Box>
  );
};

export default Polyclinic;
