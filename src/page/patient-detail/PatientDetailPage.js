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
  Stack,
  HStack,
  Text,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useDisclosure,
  Flex,
  Icon,
} from "@chakra-ui/react";

// import FilteringTable from "../../components/common/FilteringTable";
import AppShell from "../../components/staff/appshell/AppShell";
import { PatientProfile } from "./PatientProfile";
import { MedicalRecords } from "./MedicalRecords";
import { Soap } from "./Soap";
import { FaArrowLeft } from "react-icons/fa";
import { HiOutlineExclamation } from "react-icons/hi";

export const PatientDetailPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isCritical, setIsCritical] = React.useState(true);

  return (
    <AppShell>
      {isCritical ? (
        <CriticalBar onOpen={onOpen} />
      ) : (
        <Flex justify="space-between" py="4" px="10">
          <Button as={Link} to="/dashboard/patient" leftIcon={<FaArrowLeft />}>
            List Pasien
          </Button>
          <Button colorScheme="red" onClick={onOpen}>
            Critical Button
          </Button>
        </Flex>
      )}

      <ChangeCriticalStatus
        isOpen={isOpen}
        onClose={onClose}
        setIsCritical={setIsCritical}
        isCritical={isCritical}
      />
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
            Profil Pasien
          </Tab>
          <Tab fontSize="2xl" fontWeight="semibold">
            Medical Records
          </Tab>
          <Tab fontSize="2xl" fontWeight="semibold">
            SOAP
          </Tab>
          {/* <Tab fontSize="2xl" fontWeight="semibold">
            History
          </Tab> */}
        </TabList>

        <TabPanels>
          <TabPanel>
            <Box py="6">
              <Heading fontSize="3xl" mb="4">
                Profile Pasien
              </Heading>
              <PatientProfile />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box py="6">
              <Heading fontSize="3xl" mb="4">
                Medical Records
              </Heading>
              <MedicalRecords />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box py="6">
              <Heading fontSize="3xl" mb="4">
                SOAP
              </Heading>
              <Soap />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </AppShell>
  );
};

const CriticalBar = ({ onOpen }) => {
  return (
    <Box as="section" pt="8" pb="12">
      <Stack
        direction={{ base: "column", sm: "row" }}
        py="3"
        px={{ base: "3", md: "6", lg: "8" }}
        color="white"
        bg="red.600"
        justifyContent="center"
        alignItems="center"
      >
        <HStack direction="row" spacing="3">
          {/* <Box as={BellIcon} fontSize="2xl" h="10" /> */}
          <Icon as={HiOutlineExclamation} w="10" h="10" />
          <Text fontWeight="medium" marginEnd="2">
            Pasien dalam kondisi kritis!!!
          </Text>
        </HStack>
        <Button
          onClick={onOpen}
          bg="transparent"
          border="1px"
          borderColor="white"
          _hover={{ bg: "red.500" }}
        >
          Ubah Status
        </Button>
      </Stack>
    </Box>
  );
};

const ChangeCriticalStatus = ({
  isOpen,
  onClose,
  setIsCritical,
  isCritical,
}) => (
  <AlertDialog isOpen={isOpen} onClose={onClose}>
    <AlertDialogOverlay>
      <AlertDialogContent>
        <AlertDialogHeader fontSize="lg" fontWeight="bold">
          Ubah Status Pasien
        </AlertDialogHeader>

        {isCritical ? (
          <>
            <AlertDialogBody>
              Apakah pasien sudah melewati masa kritis
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={onClose}>Cancel</Button>
              <Button
                colorScheme="green"
                onClick={() => {
                  setIsCritical(false);
                  onClose();
                }}
                ml={3}
              >
                Sudah
              </Button>
            </AlertDialogFooter>
          </>
        ) : (
          <>
            <AlertDialogBody>Apakah pasien kritis?</AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={onClose}>Cancel</Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  setIsCritical(true);
                  onClose();
                }}
                ml={3}
              >
                Iya
              </Button>
            </AlertDialogFooter>
          </>
        )}
      </AlertDialogContent>
    </AlertDialogOverlay>
  </AlertDialog>
);
