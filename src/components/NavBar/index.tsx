"use client";

import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Outlet, useNavigate } from "react-router";
import colors from "../../themes/colors";
import { NavLink as RouterLink } from "react-router";
import { Links } from "../../pages/router";
import { ReactNode } from "react";

interface Props {
  children?: React.ReactNode;
  to: string;
}

const NavLink = (props: Props) => {
  const { children, to } = props;

  return (
    <Text
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: colors.Prussian_blue_light,
      }}
    >
      <RouterLink to={to}>{children}</RouterLink>
    </Text>
  );
};

type NavProps = { children?: ReactNode };

export default function NavBar({ children }: NavProps) {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        position={"sticky"}
        top={0}
        bg={colors.Prussian_blue}
        px={4}
        color={useColorModeValue("gray.200", "gray.700")}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box cursor={"default"}>Short Url</Box>
            {/* <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              cursor={"pointer"}
            >
              {Links.map((link) => (
                <NavLink to={link.path} key={link.value}>
                  {link.value}
                </NavLink>
              ))}
            </HStack> */}
          </HStack>
          {/* <Flex gap={2}>
            <Button
              colorScheme={"whiteAlpha"}
              bg={colors.Charcoal_light}
              rounded={"md"}
              px={2}
              _hover={{
                bg: colors.Charcoal_medium,
              }}
              onClick={() => navigate("signin")}
            >
              Iniciar sesión
            </Button>
            <Button
              colorScheme={"whiteAlpha"}
              bg={"blue.600"}
              rounded={"md"}
              px={2}
              _hover={{
                bg: "blue.500",
              }}
            >
              Registrarse
            </Button>
          </Flex> */}
          {/* <IconButton
            size={"md"}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            bg={colors.Prussian_blue}
            color={"white"}
            _hover={{
              bg: colors.Prussian_blue_light,
            }}
          >
            {isOpen ? (
              <IoMdClose style={{ width: "100%" }} />
            ) : (
              <GiHamburgerMenu style={{ width: "100%" }} />
            )}
          </IconButton> */}
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink to={link.path} key={link.value}>
                  {link.value}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      {children ?? <Outlet />}
    </>
  );
}
