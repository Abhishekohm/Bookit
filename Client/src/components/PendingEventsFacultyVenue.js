import {
  Stack,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import React from "react";
const PendingEventsFaculty = () => {
  return (
    <>
      <Heading textAlign={"center"} size={"lg"} marginBottom={"7"}>
        Events with Pending Approvals (F)
      </Heading>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          {/* <TableCaption fontSize="2xl">
            Events with Pending Approvals (F)
          </TableCaption> */}
          <Thead>
            <Tr>
              <Th >
                Event Name
              </Th>
              <Th >
                Event Organizer
              </Th>
              <Th >
                Acceptance
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td >
                CPP Workshop{" "}
              </Td>
              <Td >
                CoC
              </Td>
              <Td>
                <Stack spacing={4} direction="row" align="center">
                  <Button colorScheme="teal" size="md">
                    Yes
                  </Button>
                  <Button colorScheme="teal" size="md">
                    No
                  </Button>
                </Stack>
              </Td>
            </Tr>
            <Tr>
              <Td >
                CPP Workshop
              </Td>
              <Td >
                CoC
              </Td>
              <Td>
                <Stack spacing={4} direction="row" align="center">
                  <Button colorScheme="teal" size="md">
                    Yes
                  </Button>
                  <Button colorScheme="teal" size="md">
                    No
                  </Button>
                </Stack>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PendingEventsFaculty;
