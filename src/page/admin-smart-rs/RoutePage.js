import React from "react";
import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HiPencilAlt, HiTrash } from "react-icons/hi";

import FilteringTable from "../../components/common/FilteringTable";
import AppShell from "../../components/staff/appshell/AppShell";

import {
  AddRouteModal,
  EditRouteDrawer,
  DeleteRouteAlert,
} from "../../components/super-admin/route";

export const RoutePage = () => {
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
        role: "Dokter",
        menu: "pasien",
        access: ["create", "read", "update", "delete"],
      },
      {
        id: 2,
        role: "Admin",
        menu: "pasien",
        access: ["read"],
      },
      {
        id: 3,
        role: "Admin",
        menu: "Admin Smart RS",
        access: ["create", "read", "update", "delete"],
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
        Header: "Role",
        accessor: "role",
      },
      {
        Header: "Menu",
        accessor: "menu",
      },
      {
        Header: "Access",
        accessor: "access",
        Cell: ({ value }) => (
          <HStack>
            {value.map((item) => (
              <Badge key={item} colorScheme="green">
                {item}
              </Badge>
            ))}
          </HStack>
        ),
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
    <Box px="10" maxW="6xl" overflowX="auto" py="6" mx="auto">
      <AddRouteModal isOpen={isModalOpen} onClose={onModalClose} />
      <EditRouteDrawer isOpen={isDrawerOpen} onClose={onDrawerClose} />
      <DeleteRouteAlert isOpen={isAlertOpen} onClose={onAlertClose} />
      <Heading mb="6" fontSize="3xl">
        Route
      </Heading>
      <FilteringTable
        columns={columns}
        data={data}
        action={<Button onClick={onModalOpen}>Add New Route</Button>}
      />
    </Box>
    // </AppShell>
  );
};
