import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading, SimpleGrid, Image } from "@chakra-ui/react";

import LoginPageImage from "../../assets/images/login.jpg";
import Logo from "../../components/common/Logo";
import { LoginForm } from "../../components/auth/LoginForm";

export const LoginPage = () => {
  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }}>
      <Box maxH="100vh" overflow="hidden">
        <Image
          display={{ base: "none", lg: "block" }}
          src={LoginPageImage}
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
            Login ke akun anda
          </Heading>
          <Box mt="4" align="center" maxW="md" fontWeight="medium">
            <span>Belum punya akun?</span>
            <Link to="/signup">
              <Box
                as="span"
                marginStart="1"
                href="#"
                color="blue.600"
                _hover={{ color: "blue.600" }}
                display={{ base: "block", sm: "revert" }}
              >
                Signup
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
            <LoginForm />
          </Box>
        </Box>
      </Box>
    </SimpleGrid>
  );
};
