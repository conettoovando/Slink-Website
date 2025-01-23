"use client";

import { ChangeEvent,  } from "react";
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex,
} from "@chakra-ui/react";

//icons
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import colors from "../../themes/colors";
import { useRedisQuery } from "../utils/redisQuery";


export default function SimpleForm() {
  const {state, error, data, sendData, link, setLink} = useRedisQuery()
  
  return (
    <Flex
      bg={colors.Raisin_black}
      color={"white"}
      w={{ base: "xs", md: "2xl", xl: "4xl" }}
    >
      <Container
        bg={colors.Charcoal_medium}
        boxShadow={"xl"}
        rounded={"lg"}
        p={6}
      >
        <Heading
          as={"h2"}
          fontSize={{ base: "xl", sm: "1xl" }}
          textAlign={"center"}
          mb={5}
        >
          Pruebalo por 10 minutos
        </Heading>
        <Stack
          direction={{ base: "column", md: "row" }}
          as={state !== "success" ? "form" : "div"}
          spacing={"12px"}
          onSubmit={(e) => sendData(e)}
        >
          <FormControl>
            <Input
              variant={"solid"}
              borderWidth={1}
              color={"gray.800"}
              _placeholder={{
                color: "gray.400",
              }}
              borderColor={useColorModeValue("gray.300", "gray.700")}
              id={"link"}
              type={"url"}
              required
              placeholder={"https://ejemploUrl/valores.com"}
              value={link}
              disabled={state !== "initial"}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setLink(e.target.value)
              }
            />
          </FormControl>
          <FormControl w={{ base: "100%", md: "40%" }}>
            <Button
              colorScheme={state === "success" ? "green" : "blue"}
              isLoading={state === "submitting"}
              w="100%"
              type={state === "success" ? "button" : "submit"}
              onClick={
                state === "success" ? () => sendData(undefined) : () => {}
              }
            >
              {error ? (
                <IoClose />
              ) : state === "success" ? (
                <FaCheck />
              ) : (
                "Generar"
              )}
            </Button>
          </FormControl>
        </Stack>
        <Stack mt={2} textAlign={"center"} color={error ? "red.500" : "white"}>
          {error
            ? "Oh no an error occured! 😢 Please try again later."
            : data?.short_url !== null && (
                <Flex direction={"row"} gap={1} justifyContent={"center"}>
                  Su enlace es:
                    <Text
                      as={"a"}
                      target="_blank"
                      href={data?.short_url}
                      style={{ textDecoration: "underline" }}
                    >
                      {data?.short_url}
                    </Text>
                </Flex>
              )}
        </Stack>
      </Container>
    </Flex>
  );
}
