import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
export default function () {
  return (
    <SimpleGrid
      spacing={69}
          templateColumns="repeat(auto-fill, minmax(390px, 1fr))"
          pb="10"
    >
      <Card>
        <CardHeader>
          <Heading size="md"> Admin Support</Heading>
        </CardHeader>
        <CardBody>
          <Text>We have an admin alloted to the college who can add committees and their respective faculties.</Text>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <Heading size="md"> For Committees</Heading>
        </CardHeader>
        <CardBody>
          <Text>Committees can add events and book slots for the same. After adding an event the committee will be able see whether the event approval is pending or accepted.</Text>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <Heading size="md"> For Faculties</Heading>
        </CardHeader>
        <CardBody>
          <Text>Faculties have 2 roles one is of a venue organizer and one of a committee organizer. Faculties will be able to view pending and approved requests as well as accept or decline them.</Text>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <Heading size="md">For students</Heading>
        </CardHeader>
        <CardBody>
          <Text>Students from the college can view events and register for them</Text>
        </CardBody>
      </Card>
    </SimpleGrid>
  );
}
