import React from "react";
import { useHistory } from "react-router-dom";
import { Box, Button, Heading } from "@chakra-ui/react";
import FilteringTable from "../../components/common/FilteringTable";

export const MedicalRecords = () => {
  const history = useHistory();

  const handleDetails = (value) => {
    console.log(value);
    history.push(`/dashboard/patient-details/${value}`);
  };

  const data = React.useMemo(
    () => [
      {
        no: 1,
        doctor: "dr. Rudi",
        date: "11-11-2018",
        id: "123",
      },
      {
        no: 2,
        doctor: "dr. Anggi",
        date: "01-02-2014",
        id: "456",
      },
      {
        no: 3,
        doctor: "dr. Uky",
        date: "04-05-2010",
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
        Header: "Nama Dokter",
        accessor: "doctor",
      },
      {
        Header: "Tanggal",
        accessor: "date",
      },
      {
        Header: "Details",
        accessor: "id",
        Cell: ({ value }) => (
          <Button
            colorScheme="blue"
            variant="outline"
            onClick={() => handleDetails(value)}
          >
            Detail
          </Button>
        ),
      },
    ],
    []
  );

  return (
    <Box>
      <FilteringTable data={data} columns={columns} />
    </Box>
  );
};
