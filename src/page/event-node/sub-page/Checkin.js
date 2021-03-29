import React from "react";
import { Link } from "react-router-dom";
import { Badge, Box, Button, Heading, useDisclosure } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";

// import DataTable from "../../../components/common/DataTable";
import FilteringTable from "../../../components/common/FilteringTable";
import { ConfirmCheckinAlert } from "../../../components/event-node/checkin/ConfirmCheckinAlert";

const Checkin = () => {
  const {
    isOpen: isAlertOpen,
    onOpen: onAlertOpen,
    onClose: onAlertClose,
  } = useDisclosure();
  const [selectedId, setSelectedId] = React.useState("");

  const handleCheckIn = React.useCallback(
    (value) => {
      onAlertOpen();
      setSelectedId(value);
    },
    [onAlertOpen]
  );

  const data = React.useMemo(
    () => [
      {
        // no: 1,
        name: "John Doe",
        patientId: "M-2792",
        status: "Done",
        id: "BCO12HFL34",
      },
      {
        // no: 2,
        name: "Robbert",
        patientId: "B-6662",
        status: "Not yet",
        id: "BCO12HFLT2",
      },
      {
        // no: 3,
        name: "Jane Doe",
        patientId: "A-1942",
        status: "Done",
        id: "BCO12HFLT2",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      // {
      //   Header: "No",
      //   accessor: "no",
      // },
      {
        Header: "Patient-ID",
        accessor: "patientId",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => {
          return (
            <Badge
              colorScheme={
                value === "Done"
                  ? "green"
                  : value === "Not yet"
                  ? "yellow"
                  : "gray"
              }
            >
              {value}
            </Badge>
          );
        },
      },
      {
        Header: "Action",
        accessor: "id",
        Cell: ({ value, row }) => {
          if (row.values.status === "Not yet") {
            return (
              <Button colorScheme="green" onClick={() => handleCheckIn(value)}>
                Check In
              </Button>
            );
          }
          return <span></span>;
        },
      },
    ],
    [handleCheckIn]
  );

  return (
    <Box py="4" px="6">
      <Box>
        <Heading fontSize="3xl" mb="4">
          Check In
        </Heading>
        <ConfirmCheckinAlert
          isOpen={isAlertOpen}
          onClose={onAlertClose}
          selectedId={selectedId}
        />
        <FilteringTable columns={columns} data={data} />
      </Box>
    </Box>
  );
};

export default Checkin;
