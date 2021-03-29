import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";

import FilteringTable from "../../components/common/FilteringTable";
import AppShell from "../../components/staff/appshell/AppShell";

export const PatientPage = () => {
  const data = React.useMemo(
    () => [
      {
        no: 1,
        name: "John",
        personInCharge: "Robbert",
        status: "Critical",
        id: "123",
      },
      {
        no: 2,
        name: "Sarah",
        personInCharge: "Sarah",
        status: "Not Critical",
        id: "456",
      },
      {
        no: 3,
        name: "Bob",
        personInCharge: "Tom",
        status: "Not Critical",
        id: "789",
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
        Header: "Nama",
        accessor: "name",
      },
      {
        Header: "Penanggung Jawab",
        accessor: "personInCharge",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => (
          <Box
            as="span"
            p="2"
            rounded="md"
            fontWeight="semibold"
            color={value === "Critical" ? "white" : "black"}
            bgColor={value === "Critical" ? "red.500" : "inherit"}
          >
            {value}
          </Box>
        ),
      },
      {
        Header: "Details",
        accessor: "id",
        Cell: ({ value }) => (
          <Button
            colorScheme="blue"
            variant="outline"
            as={Link}
            to="/dashboard/patient-detail"
            // onClick={() => handleDetails(value)}
          >
            Detail
          </Button>
        ),
      },
    ],
    []
  );

  return (
    <AppShell>
      {/* <Box py="4" maxW="7xl" mx="auto">
        <Box>
          <Heading fontSize="3xl" mb="4">
            List Pasien
          </Heading>
          <FilteringTable columns={columns} data={data} />
        </Box>
      </Box> */}
      <Tabs
        variant="enclosed"
        py="4"
        px="10"
        mx="auto"
        overflowX="auto"
        size="lg"
      >
        <TabList>
          <Tab fontSize="2xl" fontWeight="semibold">
            Pasien Tunggu
          </Tab>
          <Tab fontSize="2xl" fontWeight="semibold">
            Pasien Aktif
          </Tab>
          <Tab fontSize="2xl" fontWeight="semibold">
            History
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Box py="6">
              <Box>
                <Heading fontSize="3xl" mb="4">
                  Pasien Tunggu
                </Heading>
                <FilteringTable columns={columns} data={data} />
              </Box>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box py="6">
              <Box>
                <Heading fontSize="3xl" mb="4">
                  Pasien Aktif
                </Heading>
                <FilteringTable columns={columns} data={data} />
              </Box>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box py="6">
              <Box>
                <Heading fontSize="3xl" mb="4">
                  History
                </Heading>
                <FilteringTable columns={columns} data={data} />
              </Box>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </AppShell>
  );
};
