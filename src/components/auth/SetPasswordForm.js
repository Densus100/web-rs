import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";

import { PasswordField } from "./PasswordField";

export const SetPasswordForm = () => {
  const history = useHistory();
  const toast = useToast();
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [cookies] = useCookies(["token"]);

  // const history = useHistory();
  // const toast = useToast();
  // const nameRef = useRef(null);
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {
  // e.preventDefault();
  // if (!name || !password) {
  //   toast({
  //     title: "Error",
  //     description: `Nama dan password harus diisi`,
  //     status: "error",
  //     duration: 4000,
  //     isClosable: true,
  //   });
  //   nameRef.current.focus();
  //   return;
  // }
  // console.log({ name, password });
  // toast({
  //   title: "Success",
  //   description:
  //     "Akun anda berhasil dibuat. Sekarang anda bisa login dengan akun anda",
  //   status: "success",
  //   duration: 4000,
  //   isClosable: true,
  // });
  // history.push(`/login`);
  // };

  const onSubmit = async (values) => {
    const { name, password } = values;
    setIsLoading(true);
    const res = await fetch("http://user-dev.ejemplo.me/v1/user/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies?.token}`,
      },
      body: JSON.stringify({ name, password }),
    });
    const data = await res.json();
    setIsLoading(false);
    toast({
      title: data.title,
      description: data.message,
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    history.push(`/login`);
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing="6">
        <FormControl id="email">
          <FormLabel>Nama Lengkap</FormLabel>
          <Input
            // ref={nameRef}
            name="name"
            ref={register}
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <PasswordField
          name="password"
          ref={register}
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          isLoading={isLoading}
          type="submit"
          colorScheme="blue"
          size="lg"
          fontSize="md"
        >
          Set Password
        </Button>
      </Stack>
    </Box>
  );
};
