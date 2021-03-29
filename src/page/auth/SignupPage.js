import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading, SimpleGrid, Image } from "@chakra-ui/react";

import SignupPageImage from "../../assets/images/register.jpg";
import Logo from "../../components/common/Logo";
import { SignupForm } from "../../components/auth/SignupForm";

export const SignupPage = () => {
  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }}>
      <Box maxH="100vh" overflow="hidden">
        <Image
          display={{ base: "none", lg: "block" }}
          src={SignupPageImage}
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
            Registrasi Akun
          </Heading>
          <Box mt="4" align="center" maxW="md" fontWeight="medium">
            <span>Sudah punya akun?</span>
            <Link to="/login">
              <Box
                as="span"
                marginStart="1"
                href="#"
                color="blue.600"
                _hover={{ color: "blue.600" }}
                display={{ base: "block", sm: "revert" }}
              >
                Login
              </Box>
            </Link>
          </Box>
        </Box>
        <Box maxW={{ sm: "md" }} mx={{ sm: "auto" }} mt="8" w={{ sm: "full" }}>
          <Box
            bg="white"
            py="8"
            px={{ base: "4", md: "10" }}
            shadow="base"
            rounded={{ sm: "lg" }}
          >
            <SignupForm />
          </Box>
        </Box>
      </Box>
    </SimpleGrid>
  );
};
