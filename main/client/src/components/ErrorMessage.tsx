import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

export default function ErrorMessage() {
  return (
    <Alert
      status="error"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        Oops! Something went wrong
      </AlertTitle>
      <AlertDescription maxWidth="lg">
        Our team has been notified of the issue, and we're working to fix it as
        soon as possible. Please try again later. Thank you for your
        understanding and patience.
      </AlertDescription>
    </Alert>
  );
}
