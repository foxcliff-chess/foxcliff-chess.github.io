import { Title } from "solid-start";
import { Box, Button, Flex, Heading, useColorMode } from "@hope-ui/core";

import Nav from "~/components/Nav";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <main>
      <Box mx={8} my={4}>
        <Flex justifyContent="end">
          <Nav title="Menu">
            <Button onClick={toggleColorMode}>
              Toggle { colorMode() === "light" ? "dark" : "light" } mode
            </Button>
          </Nav>
        </Flex>
      </Box>
      <Title>Foxcliff Chess Club</Title>
      <Heading size="5xl">Foxcliff Chess Club</Heading>
    </main>
  );
}
