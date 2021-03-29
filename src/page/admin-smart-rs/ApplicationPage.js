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
import { useQuery } from "react-query";
import { useCookies } from "react-cookie";

import FilteringTable from "../../components/common/FilteringTable";
import {
  AddApplicationModal,
  EditApplicationDrawer,
  DeleteApplicationAlert,
} from "../../components/super-admin/application";
import { getApplication } from "../../query/admin-smart-rs/application";

export const ApplicationPage = () => {
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

  const { data: res, isSuccess } = useQuery(
    "application",
    getApplication(cookies)
  );

  const handleEdit = () => {
    onDrawerOpen();
  };

  const handleDelete = () => {
    onAlertOpen();
  };

  const data = React.useMemo(
    () =>
      isSuccess &&
      res?.data?.map((app) => ({
        name: app.name,
        platform: app.platform,
        description: app.description,
      })),
    [res?.data, isSuccess]
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Platform",
        accessor: "platform",
        Cell: ({ value }) => (
          <HStack>
            {value.map((item) => (
              <Badge key={JSON.stringify(item)}>{item}</Badge>
            ))}
          </HStack>
        ),
      },
      {
        Header: "Description",
        accessor: "description",
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
      <AddApplicationModal isOpen={isModalOpen} onClose={onModalClose} />
      <EditApplicationDrawer isOpen={isDrawerOpen} onClose={onDrawerClose} />
      <DeleteApplicationAlert isOpen={isAlertOpen} onClose={onAlertClose} />
      <Heading mb="6" fontSize="3xl">
        Application
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
