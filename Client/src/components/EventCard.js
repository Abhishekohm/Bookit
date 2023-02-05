import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  Flex,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";

export default function EventCard() {
  return (
    <Flex>
      <Center py={6}  marginLeft='30' flex>
        <Box marginLeft='30'
          maxW={"320px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={6}
          textAlign={"center"}
        >
          <Avatar
            size={"xl"}
            src={
              "https://cdn.logojoy.com/wp-content/uploads/2018/05/30163918/1241-768x591.png"
            }
            alt={"Avatar Alt"}
            mb={4}
            pos={"relative"}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: "green.300",
              border: "2px solid white",
              rounded: "full",
              pos: "absolute",
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            FY CPP Workshop
          </Heading>
          <Text fontWeight={600} color={"gray.500"} mb={4}>
            @CCF-2
          </Text>
          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            temporibus inventore voluptates aperiam ducimus odit excepturi
            maxime, quidem voluptate consequatur ab impedit neque tenetur.
            Mollitia et neque eos dicta dolorum.
          </Text>

          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              6:00 PM - 9:00 pm
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              05-02-2023
            </Badge>
          </Stack>

          <Stack mt={8} direction={"row"} spacing={4}>
            <Button
              flex={1}
              fontSize={"lg"}
              rounded={"full"}
              bg={"teal.200"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "teal.500",
              }}
              _focus={{
                bg: "teal.500",
              }}
            >
              Register
            </Button>
          </Stack>
        </Box>
      </Center>
            <Spacer />
      <Center py={6}>
        <Box
          maxW={"320px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={6}
          textAlign={"center"}
        >
          <Avatar
            size={"xl"}
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0uChIvAhL9lANNk5lSO_LR24XjiG43WrxcQ&usqp=CAU"
            }
            alt={"Avatar Alt"}
            mb={4}
            pos={"relative"}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: "green.300",
              border: "2px solid white",
              rounded: "full",
              pos: "absolute",
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            Git Workshop
          </Heading>
          <Text fontWeight={600} color={"gray.500"} mb={4}>
            @CS-IT Lab 2
          </Text>
          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            temporibus inventore voluptates aperiam ducimus odit excepturi
            maxime, quidem voluptate consequatur ab impedit neque tenetur.
            Mollitia et neque eos dicta dolorum.
          </Text>

          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              7:00 PM - 9:00 PM
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              07-12-2023
            </Badge>
          </Stack>

          <Stack mt={8} direction={"row"} spacing={4}>
            <Button
              flex={1}
              fontSize={"lg"}
              rounded={"full"}
              bg={"teal.200"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "teal.500",
              }}
              _focus={{
                bg: "teal.500",
              }}
            >
              Register
            </Button>
          </Stack>
        </Box>
      </Center>
      <Spacer />
      <Center py={6}>
        <Box
          maxW={"320px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={6}
          textAlign={"center"}
        >
          <Avatar
            size={"xl"}
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Ubrtq_HLQFzGk9uPUYKQC9pvHKlD3S2I6YGgT02SiF4qoZUmujH3hJnE9FUeoifGI4U&usqp=CAU"
            }
            alt={"Avatar Alt"}
            mb={4}
            pos={"relative"}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: "green.300",
              border: "2px solid white",
              rounded: "full",
              pos: "absolute",
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            Basic Mechanics Workshop
          </Heading>
          <Text fontWeight={600} color={"gray.500"} mb={4}>
            @Mechanical Hall
          </Text>
          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            temporibus inventore voluptates aperiam ducimus odit excepturi
            maxime, quidem voluptate consequatur ab impedit neque tenetur.
            Mollitia et neque eos dicta dolorum.
          </Text>

          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              10:00 AM - 12:00 AM
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              17-09-2023
            </Badge>
          </Stack>

          <Stack mt={8} direction={"row"} spacing={4}>
            <Button
              flex={1}
              fontSize={"lg"}
              rounded={"full"}
              bg={"teal.200"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "teal.500",
              }}
              _focus={{
                bg: "teal.500",
              }}
            >
              Register
            </Button>
          </Stack>
        </Box>
      </Center>
      <Spacer />
      <Center py={6}>
        <Box
          maxW={"320px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={6}
          textAlign={"center"}
        >
          <Avatar
            size={"xl"}
            src={
              "https://img.freepik.com/premium-vector/workshop-key-logo-vintage-style_530816-260.jpg"
            }
            alt={"Avatar Alt"}
            mb={4}
            pos={"relative"}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: "green.300",
              border: "2px solid white",
              rounded: "full",
              pos: "absolute",
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            ML Workshop
          </Heading>
          <Text fontWeight={600} color={"gray.500"} mb={4}>
            @Seminar Hall
          </Text>
          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            temporibus inventore voluptates aperiam ducimus odit excepturi
            maxime, quidem voluptate consequatur ab impedit neque tenetur.
            Mollitia et neque eos dicta dolorum.
          </Text>

          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              1:00 PM - 4:00 pm
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              15-08-2023
            </Badge>
          </Stack>

          <Stack mt={8} direction={"row"} spacing={4}>
            <Button
              flex={1}
              fontSize={"lg"}
              rounded={"full"}
              bg={"teal.200"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "teal.500",
              }}
              _focus={{
                bg: "teal.500",
              }}
            >
              Register
            </Button>
          </Stack>
        </Box>
      </Center>
    </Flex>
  );
}
