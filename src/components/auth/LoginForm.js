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

export const LoginForm = () => {
  const [cookies, setCookie] = useCookies(["token"]);
  const toast = useToast();
  const history = useHistory();
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!email || !password) {
  //     toast({
  //       title: "Error",
  //       description: `Email dan password harus diisi`,
  //       status: "error",
  //       duration: 4000,
  //       isClosable: true,
  //     });
  //     emailRef.current.focus();
  //     return;
  //   }
  //   console.log({ email, password });
  //   toast({
  //     title: "Success",
  //     description: `Anda berhasil login`,
  //     status: "success",
  //     duration: 4000,
  //     isClosable: true,
  //   });
  //   history.push("/dashboard");
  // };

  const onSubmit = async (values) => {
    const { email, password } = values;
    setIsLoading(true);
    const res = await fetch("http://auth-dev.ejemplo.me/v2/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: email, password, app: "smartrs" }),
    });
    const data = await res.json();
    console.log({ data });

    setCookie("token", data.token, { path: "/" });
    setIsLoading(false);
    toast({
      title: data?.title,
      description: data?.message,
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    history.push(`/dashboard`);
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing="6">
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input name="email" type="email" required ref={register} />
        </FormControl>
        <PasswordField forgot="true" name="password" ref={register} />
        <Button
          isLoading={isLoading}
          type="submit"
          colorScheme="blue"
          size="lg"
          fontSize="md"
        >
          Sign in
        </Button>
      </Stack>
    </Box>
  );
};
