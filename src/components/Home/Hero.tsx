"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import colors from "../../themes/colors";
import SimpleForm from "../forms/SimpleForm";

export default function Hero() {
  return (
    <Flex bg={colors.Raisin_black} h={"calc(100vh - 64px)"}>
      <Container maxW={"6xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 10, sm: 12, md: 16, xl: 20 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
            lineHeight={"120%"}
            color={"white"}
          >
            Transforma tus enlaces:
            <br />
            <Text as={"span"} color={"green.400"}>
              más cortos, más impactantes
            </Text>
          </Heading>
          <Text color={"gray.500"} fontSize={{ base: "medium", md: "xl" }}>
            ¡Comparte enlaces dinámicos, fáciles de recordar e implementar,
            adaptados al uso que les quieras dar!
          </Text>
          <Stack align={"center"}>
            <SimpleForm />
          </Stack>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              colorScheme={"green"}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
              disabled
            >
              Comenzar
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Flex>
  );
}
