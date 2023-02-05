import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

export default function StudentRegSuccess() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Thank you
      </Heading>
      <Text color={"gray.500"}>
        You have been successfully registered for this event
      </Text>
      <div>
        <Button
            marginTop={'4'}
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
          Back
        </Button>
      </div>
    </Box>
  );
}
