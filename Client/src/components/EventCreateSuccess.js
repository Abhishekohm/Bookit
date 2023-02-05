import { Box, Heading, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

export default function EventCreateSuccess() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Thank you for creating this event.
      </Heading>
      <Text color={'gray.500'}>
        Your event has been successfully created. We will inform you as soon as the event is approved by the corresponding faculties.
      </Text>
    </Box>
  );
}