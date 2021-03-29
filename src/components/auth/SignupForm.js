import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";

export const SignupForm = () => {
  const history = useHistory();
  const toast = useToast();
  const emailRef = useRef(null);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (email === "dayat@gmail.com") {
    //   toast({
    //     title: "Error",
    //     description: `Email sudah terdaftar, gunakan email lain atau login dengan ${email}`,
    //     status: "error",
    //     duration: 4000,
    //     isClosable: true,
    //   });
    //   emailRef.current.focus();
    //   return;
    // }
    // console.log({ email });
    // toast({
    //   title: "Success",
    //   description: "Cek email anda untuk mendapatkan OTP",
    //   status: "success",
    //   duration: 4000,
    //   isClosable: true,
    // });
    // setEmail("");
    // history.push(`/verification?email=${email}`);
    setIsLoading(true);
    const res = await fetch("http://auth-dev.ejemplo.me/v2/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ identity: email, app: "smartrs" }),
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
    history.push(`/verification?email=${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing="6">
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input
            ref={emailRef}
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <Button
          isLoading={isLoading}
          type="submit"
          colorScheme="blue"
          size="lg"
          fontSize="md"
        >
          Sign up
        </Button>
      </Stack>
    </form>
  );
};
