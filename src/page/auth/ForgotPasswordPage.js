import React from "react";
import { Box, Heading, SimpleGrid, Text, Image } from "@chakra-ui/react";

import ForgotPasswordPageImage from "../../assets/images/login.jpg";
import Logo from "../../components/common/Logo";
import { ForgotPasswordForm } from "../../components/auth/ForgotPasswordForm";

export const ForgotPasswordPage = () => {
  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }}>
      <Box maxH="100vh" overflow="hidden">
        <Image
          display={{ base: "none", lg: "block" }}
          src={ForgotPasswordPageImage}
          minH="100vh"
          alt="Login page image"
          objectFit="cover"
          style={{ filter: "grayscal(100%)" }}
        />
      </Box>
      <Box bg="gray.50" minH="100vh" py="12" px={{ sm: "6", lg: "8" }}>
        <Box maxW={{ sm: "sm" }} mx={{ sm: "auto" }} w={{ sm: "full" }}>
          <Logo />
          <Heading mt="6" textAlign="center" size="xl" fontWeight="extrabold">
            Forgot Password?
          </Heading>
          <Text mt="4" align="center" maxW="sm" fontWeight="medium">
            Enter your email and we'll send you a link to reset your password
          </Text>
        </Box>
        <Box maxW={{ sm: "md" }} mx={{ sm: "auto" }} mt="8" w={{ sm: "full" }}>
          <Box
            bg="white"
            py="8"
            px={{ base: "4", md: "10" }}
            shadow="base"
            rounded={{ sm: "lg" }}
          >
            <ForgotPasswordForm />
          </Box>
        </Box>
      </Box>
    </SimpleGrid>
  );
};
