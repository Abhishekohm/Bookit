import React from "react";
import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import { DragHandleIcon } from "@chakra-ui/icons";

import HomeCard from "./HomeCard";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  CloseButton,
  Center,
  background,
} from "@chakra-ui/react";
const Home = () => {
  const logout = useLogout();
  return (
    <div style={{backgroundColor:"teal"}}>
      <Center>
        <Flex h="100" alignItems="center" mx="8" justifyContent="space-between">
          <DragHandleIcon />

          <Text
            fontSize="2xl"
            fontFamily="monospace"
            fontWeight="bold"
            marginLeft={"4"}
          >
            Book-It
          </Text>
        </Flex>
      </Center>
      <Stack spacing={35} direction="column" alignItems="center">
          <Stack spacing={4} direction="row" align="center">
            <Button color="teal.300" size="md">
              <Link to="/login">Login</Link>
            </Button>
            <Button color="teal.300" size="md">
              <Link to="/register">Signup</Link>
            </Button>
          </Stack>
        <HomeCard />
      </Stack>
    </div>
  );
};

export default Home;
