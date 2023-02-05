import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading
} from "@chakra-ui/react";
import React from "react";

const PendingEventsCommunity = () => {
  return (
    <>
      <Heading textAlign={'center'} size={'lg'} marginBottom={'7'}>Events with Pending Approvals (C)</Heading>
      <TableContainer>
        <Table variant="striped" colorScheme="teal" >
          {/* <TableCaption fontSize='2xl'>Events with Pending Approvals (C)</TableCaption> */}
          <Thead>
            <Tr>
              <Th fontSize="1.5xl">Event Name</Th>
              <Th fontSize="1.5xl">Faculty Organizer</Th>
              <Th fontSize="1.5xl">Faculty Organizer Status</Th>
              <Th fontSize="1.5xl">Venue Organizer</Th>
              <Th fontSize="1.5xl">Venue Organizer Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>CPP Workshop</Td>
              <Td>abc</Td>
              <Td>Accpeted</Td>
              <Td>xyz</Td>
              <Td>Decline</Td>
            </Tr>
            <Tr>
              <Td>CPP Workshop</Td>
              <Td>abc</Td>
              <Td>Pending</Td>
              <Td>xyz</Td>
              <Td>Decline</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PendingEventsCommunity;
