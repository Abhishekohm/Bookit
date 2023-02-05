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

const ApprovedEventsCommunity = () => {
  return (
    <>
      <Heading textAlign={'center'} size={'lg'} marginBottom={'7'}>Approved Events (C)</Heading>
      <TableContainer>
        <Table variant="striped" colorScheme="teal" >
          {/* <TableCaption fontSize='2xl'>Approved Events (C)</TableCaption> */}
          <Thead>
            <Tr>
              <Th fontSize="1.5xl">Event Name</Th>
              <Th fontSize="1.5xl">Event Venue</Th>
              <Th fontSize="1.5xl">No. of registrations</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>CPP Workshop</Td>
              <Td>CCF-2</Td>
              <Td>240</Td>
            </Tr>
            <Tr>
              <Td>Python Workshop</Td>
              <Td>abc</Td>
              <Td>150</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ApprovedEventsCommunity;
