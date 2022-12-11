import { Title } from "solid-start";

import { Anchor, Box, Center, Heading, Text } from "@hope-ui/core";

export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <Box my={12}>
        <Center>
          <Heading size="4xl">Page Not Found</Heading>
        </Center>
        <Center mt={2}>
          <Anchor href="/">
            Click here to return to the main page.
          </Anchor>
        </Center>
      </Box>
    </main>
  );
}
