import { Title } from "solid-start";
import { Box, Flex } from "@hope-ui/core";

import Nav from "~/components/Nav";

export default function Home() {
  return (
    <main>
      <Box mx={12} my={10}>
        <Flex justifyContent="end">
          <Nav />
        </Flex>
      </Box>
      <Title>Foxcliff Chess Club</Title>
      <h1>Foxcliff Chess Club</h1>
    </main>
  );
}
