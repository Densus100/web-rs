import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Heading, SimpleGrid, Image, useToast } from "@chakra-ui/react";

import VerificationPageImage from "../../assets/images/register.jpg";
import Logo from "../../components/common/Logo";
import { VerificationOTPForm } from "../../components/auth/VerificationOTPForm";

export const VerificationPage = () => {
  const toast = useToast();
  const { search } = useLocation();
  const email = new URLSearchParams(search).get("email");

  const handleResendOTP = (e) => {
    toast({
      title: "Success",
      description: "OTP baru sudah dikirimkan ke email anda",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    console.log({ email });
  };

  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }}>
      <Box maxH="100vh" overflow="hidden">
        <Image
          display={{ base: "none", lg: "block" }}
          src={VerificationPageImage}
          minH="100vh"
          alt="Login page image"
          objectFit="cover"
          style={{ filter: "grayscal(100%)" }}
        />
      </Box>
      <Box bg="gray.50" minH="100vh" py="12" px={{ sm: "6", lg: "8" }}>
        <Box maxW={{ sm: "md" }} mx={{ sm: "auto" }} w={{ sm: "full" }}>
          <Logo />
          <Heading mt="6" textAlign="center" size="xl" fontWeight="extrabold">
            Verification
          </Heading>
        </Box>
        <Box maxW={{ sm: "md" }} mx={{ sm: "auto" }} mt="8" w={{ sm: "full" }}>
          <Box
            bg="white"
            py="8"
            px={{ base: "4", md: "10" }}
            shadow="base"
            rounded={{ sm: "lg" }}
          >
            <VerificationOTPForm />
          </Box>
          <Box mt="4" align="center" maxW="md" fontWeight="medium">
            <Box
              as="button"
              p="2"
              marginStart="1"
              href="#"
              color="blue.600"
              _hover={{ color: "blue.600" }}
              display={{ base: "block", sm: "revert" }}
              onClick={handleResendOTP}
            >
              Resend OTP
            </Box>
          </Box>
        </Box>
      </Box>
    </SimpleGrid>
  );
};
