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
import { useQuery } from "react-query";
import { useCookies } from "react-cookie";

import FilteringTable from "../../components/common/FilteringTable";
import {
  AddMenuModal,
  DeleteMenuAlert,
  EditMenuDrawer,
} from "../../components/super-admin/menu";
import { getAllMenu, getMenuById } from "../../query/admin-smart-rs/menu";
import { getApplicationById } from "../../query/admin-smart-rs/application";

export const MenuPage = () => {
  const [cookies] = useCookies(["token"]);
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

  const { data: resMenu } = useQuery("menu", getAllMenu(cookies));

  const handleEdit = React.useCallback(() => {
    onDrawerOpen();
  }, [onDrawerOpen]);

  const handleDelete = React.useCallback(() => {
    onAlertOpen();
  }, [onAlertOpen]);

  const data = React.useMemo(
    () =>
      resMenu?.data?.map((menu) => {
        console.log({ menu });
        return {
          app: menu.app_id,
          name: menu.name,
          parent: menu.parent_id,
          description: menu.description,
          status: menu.status,
        };
      }),
    [resMenu?.data]
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "App",
        accessor: "app",
        Cell: ({ value }) => {
          const { data: resApp } = useQuery(
            ["app", value],
            getApplicationById(cookies, value),
            { enabled: Boolean(value) }
          );
          return resApp?.data?.name || "-";
        },
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Parent Menu",
        accessor: "parent",
        Cell: ({ value }) => {
          const { data: resMenu } = useQuery(
            ["menu", value],
            getMenuById(cookies, value),
            { enabled: Boolean(value) }
          );
          return resMenu?.data?.name || "-";
        },
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Status",
        accessor: "status",
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
    [cookies, handleDelete, handleEdit]
  );

  return (
    // <AppShell>
    <Box px="10" maxW="6xl" overflowX="auto" py="6" mx="auto">
      <AddMenuModal isOpen={isModalOpen} onClose={onModalClose} />
      <EditMenuDrawer isOpen={isDrawerOpen} onClose={onDrawerClose} />
      <DeleteMenuAlert isOpen={isAlertOpen} onClose={onAlertClose} />
      <Heading mb="6" fontSize="3xl">
        Menu
      </Heading>
      <FilteringTable
        columns={columns}
        data={data || []}
        action={<Button onClick={onModalOpen}>Add New Menu</Button>}
      />
    </Box>
    // </AppShell>
  );
};
