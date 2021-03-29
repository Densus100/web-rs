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
  AddRoleModal,
  DeleteRoleAlert,
  EditRoleDrawer,
} from "../../components/super-admin/role";
import AppShell from "../../components/staff/appshell/AppShell";

export const RolePage = () => {
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
        name: "Doctor",
        alias: "doctor",
      },
      {
        id: 2,
        name: "Admin",
        alias: "admin",
      },
      {
        id: 3,
        name: "Management",
        alias: "management",
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
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Alias",
        accessor: "alias",
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
      <AddRoleModal isOpen={isModalOpen} onClose={onModalClose} />
      <EditRoleDrawer isOpen={isDrawerOpen} onClose={onDrawerClose} />
      <DeleteRoleAlert isOpen={isAlertOpen} onClose={onAlertClose} />
      <Heading mb="6" fontSize="3xl">
        Role
      </Heading>
      <FilteringTable
        columns={columns}
        data={data}
        action={<Button onClick={onModalOpen}>Add New Menu</Button>}
      />
    </Box>
    // </AppShell>
  );
};
