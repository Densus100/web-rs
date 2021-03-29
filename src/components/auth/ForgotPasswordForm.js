import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";

export const ForgotPasswordForm = () => {
  const toast = useToast();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Error",
        description: `Email harus diisi`,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }
    console.log({ email });
    toast({
      title: "Success",
      description: `Cek email anda untuk mendapatkan link reset password`,
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing="6">
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          Send
        </Button>
      </Stack>
    </form>
  );
};
