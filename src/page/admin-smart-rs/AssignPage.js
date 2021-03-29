import React from "react";
import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HiPencilAlt, HiTrash } from "react-icons/hi";

import FilteringTable from "../../components/common/FilteringTable";
import {
  AddAssignModal,
  DeleteAssignAlert,
  EditAssignDrawer,
} from "../../components/super-admin/assign";
import AppShell from "../../components/staff/appshell/AppShell";

export const AssignPage = () => {
  const {
    onOpen: onModalOpen,
    isOpen: isModalOpen,
    onClose: onModalClose,
  } = useDisclosure();
  const {
    onOpen: onDrawerOpen,
    isOpen: isDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();
  const {
    onOpen: onAlertOpen,
    isOpen: isAlertOpen,
    onClose: onAlertClose,
  } = useDisclosure();

  const handleEdit = () => {
    onDrawerOpen();
  };

  const handleDelete = () => {
    onAlertOpen();
  };

  const data = React.useMemo(
    () => [
      {
        id: 1,
        user: "John",
        role: "Dokter",
      },
      {
        id: 2,
        user: "Jane",
        role: "Pasien",
      },
      {
        id: 3,
        user: "Bob",
        role: "Dokter",
      },
      {
        id: 4,
        user: "Alice",
        role: "Admin",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
        // isNumeric: true,
      },
      {
        Header: "User",
        accessor: "user",
      },
      {
        Header: "Role",
        accessor: "role",
      },
      {
        Header: "Action",
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
    []
  );

  return (
    // <AppShell>
    <Box px="10" maxW="6xl" mx="auto" overflowX="auto" py="6">
      <AddAssignModal isOpen={isModalOpen} onClose={onModalClose} />
      <EditAssignDrawer isOpen={isDrawerOpen} onClose={onDrawerClose} />
      <DeleteAssignAlert isOpen={isAlertOpen} onClose={onAlertClose} />
      <Heading mb="6" fontSize="3xl">
        Assign
      </Heading>
      <FilteringTable
        columns={columns}
        data={data}
        action={<Button onClick={onModalOpen}>Assign New Role</Button>}
      />
    </Box>
    // </AppShell>
  );
};
