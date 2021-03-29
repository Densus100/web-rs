import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Checkbox,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";
import { useQuery } from "react-query";

// const getApplication = (cookies) => async () => {
//   const res = await fetch(
//     "http://app-dev.ejemplo.me/v1/application?sort_unix_created_at=asc",
//     {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${cookies?.token}`,
//       },
//     }
//   );
//   return await res.json();
// };

export const AddApplicationModal = ({ isOpen, onClose }) => {
  const toast = useToast();
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = React.useState(false);
  const [cookies] = useCookies(["token"]);

  // const { data } = useQuery("application", getApplication(cookies));

  const onSubmit = async (values) => {
    const platform = values.platform.filter((plat) => plat !== false);
    const application = {
      name: values.name,
      platform,
      description: values.description,
    };

    if (!application.name || !application.platform.length) {
      toast({
        title: "Error",
        description: `Application name and platform required`,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(true);
    const res = await fetch("http://app-dev.ejemplo.me/v1/application/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies?.token}`,
      },
      body: JSON.stringify(application),
    });
    const data = await res.json();
    console.log(data);
    reset();
    onClose();
    toast({
      title: "Success",
      description: `Applikasi berhasil dibuat`,
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
        <ModalHeader>Create Application</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <FormControl id="name" mb="8">
              <FormLabel>Application Name</FormLabel>
              <Input name="name" ref={register} />
            </FormControl>
            <FormControl id="platform" mb="8">
              <FormLabel>Platform</FormLabel>

              <HStack spacing="10">
                <Checkbox value="website" name="platform[0]" ref={register}>
                  Website
                </Checkbox>
                <Checkbox value="mobile" name="platform[1]" ref={register}>
                  Mobile
                </Checkbox>
                <Checkbox value="desktop" name="platform[2]" ref={register}>
                  Desktop
                </Checkbox>
              </HStack>
            </FormControl>
            <FormControl id="description" mb="8">
              <FormLabel>Description</FormLabel>
              <Textarea
                placeholder="Description"
                name="description"
                ref={register}
              />
            </FormControl>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} onClick={onClose} variant="ghost">
            Close
          </Button>
          <Button isLoading={isLoading} colorScheme="blue" type="submit">
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
