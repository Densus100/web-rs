import React from "react";
import { Link } from "react-router-dom";
import { Badge, Box, Button, Heading, useDisclosure } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";

// import DataTable from "../../../components/common/DataTable";
// import { ColumnFilter } from "../../../components/common/ColumnFilter";
// import ColumnFilterTable from "../../../components/common/ColumnFilterTable";
import FilteringTable from "../../../components/common/FilteringTable";
import { ConfirmPaymentAlert } from "../../../components/event-node/payment/ConfirmPaymentAlert";

const Payment = () => {
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
        no: 1,
        code: "BCO12HFL34",
        name: "John Doe",
        event: "Cek Darah",
        personInCharge: "Rudy",
        total: "200.000",
        status: "unpaid",
        id: "BCO12HFL34",
      },
      {
        no: 2,
        code: "BCO12HFLT2",
        name: "Robbert",
        event: "Imaging",
        personInCharge: "Anwar",
        total: "180.000",
        status: "unpaid",
        id: "BCO12HFLT2",
      },
      {
        no: 3,
        code: "BCO12HFLT2",
        name: "Jane Doe",
        event: "Pemeriksaan Dokter",
        personInCharge: "dr. Sarah",
        total: "300.000",
        status: "paid",
        id: "BCO12HFLT2",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "No",
        accessor: "no",
        // Filter: ColumnFilter,
      },
      {
        Header: "Kode booking",
        accessor: "code",
        // Filter: ColumnFilter,
      },
      {
        Header: "Event",
        accessor: "event",
        // Filter: ColumnFilter,
      },
      {
        Header: "Name",
        accessor: "name",
        // Filter: ColumnFilter,
      },
      {
        Header: "Total",
        accessor: "total",
        Cell: ({ value }) => <Box>Rp.{value}</Box>,
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => {
          return (
            <Badge
              colorScheme={
                value === "paid"
                  ? "green"
                  : value === "unpaid"
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
          if (row.values.status === "unpaid") {
            return (
              <Button colorScheme="green" onClick={() => handleCheckIn(value)}>
                Confirm
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
          Payment
        </Heading>
        <ConfirmPaymentAlert
          isOpen={isAlertOpen}
          onClose={onAlertClose}
          selectedId={selectedId}
        />
        {/* <DataTable columns={columns} data={data} /> */}
        <FilteringTable columns={columns} data={data} />
        {/* <ColumnFilterTable columns={columns} data={data} /> */}
      </Box>
    </Box>
  );
};

export default Payment;
