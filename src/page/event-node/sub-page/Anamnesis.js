import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Heading } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";

// import DataTable from "../../../components/common/DataTable";
import FilteringTable from "../../../components/common/FilteringTable";

const Anamnesis = () => {
  const data = React.useMemo(
    () => [
      {
        no: 1,
        name: "John",
        personInCharge: "Robbert",
        status: "Selesai",
        id: "123",
      },
      {
        no: 2,
        name: "Sarah",
        personInCharge: "Sarah",
        status: "Selesai",
        id: "456",
      },
      {
        no: 3,
        name: "Bob",
        personInCharge: "Tom",
        status: "Menunggu",
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
      },
      {
        Header: "Details",
        accessor: "id",
        Cell: ({ value }) => (
          <Button
            colorScheme="blue"
            variant="outline"
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
    <Box py="4">
      <Box>
        {/* <Button
          mb="4"
          as={Link}
          to="/dashboard/events"
          leftIcon={<FaArrowLeft />}
        >
          Events
        </Button> */}

        <Heading fontSize="3xl" mb="4">
          Pemeriksaan Dokter
        </Heading>

        {/* <DataTable columns={columns} data={data} /> */}
        <FilteringTable columns={columns} data={data} />
      </Box>
    </Box>
  );
};

export default Anamnesis;
