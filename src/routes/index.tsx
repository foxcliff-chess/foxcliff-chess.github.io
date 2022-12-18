import { Title } from "solid-start";
import { Box, Button, Flex, Text, VStack, useColorMode } from "@hope-ui/core";

import Nav from "~/components/Nav";
import Hero from "~/components/Hero";
import Section from "~/components/Section";
import Footer from "~/components/Footer";

import NextMeeting from "~/components/NextMeeting";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <main>
      <Box bg={`linear-gradient(var(--hope-colors-neutral-50), var(--hope-colors-neutral-300))`} _dark={{ bg: `linear-gradient(var(--hope-colors-neutral-900), var(--hope-colors-neutral-700))`}}>
        <Flex justifyContent="end">
          <Nav title="Menu" mx={8} my={4} py={2}>
            <Button onClick={toggleColorMode}>
              Toggle { colorMode() === "light" ? "dark" : "light" } mode
            </Button>
          </Nav>
        </Flex>
        <Title>Foxcliff Chess Club</Title>
        <Hero />
        <VStack spacing={8}>
          <Section heading="About">
            <Text size="xl">We meet the 1st and 3rd Thursday of every month. Our next meeting will take place on <NextMeeting fontWeight="bold" /></Text>
          </Section>
        </VStack>
        <Footer />
      </Box>
    </main>
  );
}
