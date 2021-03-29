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
  Select,
  useToast,
} from "@chakra-ui/react";
import slugify from "slugify";
import { useQuery } from "react-query";
import { useCookies } from "react-cookie";

import { getApplication } from "../../../query/admin-smart-rs/application";
import { getAllMenu } from "../../../query/admin-smart-rs/menu";

export const AddMenuModal = ({ isOpen, onClose }) => {
  const toast = useToast();
  const [cookies] = useCookies(["token"]);
  const [application, setApplication] = React.useState("");
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [parentId, setParentId] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const { data: resMenu, isSuccess: isSuccessMenu } = useQuery(
    "menu",
    getAllMenu(cookies)
  );
  const { data: resApp, isSuccess: isSuccessApp } = useQuery(
    "application",
    getApplication(cookies)
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const menu = {
      app_id: application,
      data: [
        {
          name,
          alias: slugify(name, { lower: true }),
          description,
          parent_id: parentId === "" ? null : parentId,
          status: 1,
        },
      ],
    };
    console.log("menu", menu);
    setIsLoading(true);
    const res = await fetch("http://app-dev.ejemplo.me/v1/menu/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies?.token}`,
      },
      body: JSON.stringify(menu),
    });
    const data = await res.json();
    console.log(data);
    setName("");
    setDescription("");
    setParentId("");
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
      <ModalContent as="form" onSubmit={handleSubmit}>
        <ModalHeader>Create New Menu</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <FormControl id="application" mb="4">
              <FormLabel>Application</FormLabel>
              <Select
                value={application}
                onChange={(e) => setApplication(e.target.value)}
              >
                <option value="">Select App</option>
                {/* <option value="test">Test 1</option>
                <option value="test2">Test 2</option> */}
                {isSuccessApp &&
                  resApp?.data?.map((app) => (
                    <option key={app.id} value={app.id}>
                      {app.name}
                    </option>
                  ))}
              </Select>
            </FormControl>
            <FormControl id="name" mb="4">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl id="alias" mb="4">
              <FormLabel>Alias</FormLabel>
              <Input
                type="text"
                disabled
                variant="filled"
                value={slugify(name, { lower: true })}
              />
            </FormControl>
            <FormControl id="description" mb="4">
              <FormLabel>Description</FormLabel>
              <Input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>
            <FormControl id="parent" mb="4">
              <FormLabel>Parent</FormLabel>
              <Select
                value={parentId}
                onChange={(e) => setParentId(e.target.value)}
              >
                <option value="">Select Parent</option>
                {/* <option value="test">Test 1</option>
                <option value="test2">Test 2</option> */}
                {isSuccessMenu &&
                  resMenu?.data?.map((menu) => (
                    <option key={menu.id} value={menu.id}>
                      {menu.name}
                    </option>
                  ))}
              </Select>
            </FormControl>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button type="button" mr={3} onClick={onClose} variant="ghost">
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
