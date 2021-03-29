import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  PinInput,
  PinInputField,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { useCookies } from "react-cookie";

export const VerificationOTPForm = () => {
  const [cookies, setCookie] = useCookies(["token"]);
  const toast = useToast();
  const history = useHistory();
  const { search } = useLocation();
  const email = new URLSearchParams(search).get("email");
  const [otp, setOTP] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || otp.length !== 6) {
      toast({
        title: "Error",
        description: `URL atau OTP tidak valid`,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }
    setIsLoading(true);
    const res = await fetch("http://auth-dev.ejemplo.me/v2/register/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identity: email,
        app: "smartrs",
        verification_pin: otp,
      }),
    });
    const { data } = await res.json();
    setCookie("token", data, { path: "/" });
    console.log(data);
    setIsLoading(false);
    history.push("/set-password/285389ygvhdfkgh93854ry");
  };

  console.log({ cookies });

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing="6">
        <FormControl id="otp">
          <FormLabel textAlign="center">Input OTP</FormLabel>
          <HStack spacing={2} justify="center" mt="6">
            <PinInput
              size="lg"
              variant="filled"
              value={otp}
              onChange={(value) => setOTP(value)}
              otp
            >
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
        </FormControl>
        <Button
          isLoading={isLoading}
          type="submit"
          colorScheme="blue"
          size="lg"
          fontSize="md"
        >
          Verify
        </Button>
      </Stack>
    </form>
  );
};
