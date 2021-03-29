import React from "react";
import { Box, Heading, SimpleGrid, Image } from "@chakra-ui/react";

import SetPasswordPageImage from "../../assets/images/register.jpg";
import Logo from "../../components/common/Logo";
import { SetPasswordForm } from "../../components/auth/SetPasswordForm";

export const SetPasswordPage = () => {
  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }}>
      <Box maxH="100vh" overflow="hidden">
        <Image
          display={{ base: "none", lg: "block" }}
          src={SetPasswordPageImage}
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
            Set Nama Lengkap dan Password
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
            <SetPasswordForm />
          </Box>
        </Box>
      </Box>
    </SimpleGrid>
  );
};
