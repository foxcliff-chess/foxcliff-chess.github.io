import { Title } from "solid-start";
import { Anchor, Box, Button, Center, Flex, Image, Text, VStack, useColorMode } from "@hope-ui/core";

import Nav from "~/components/Nav";
import Hero from "~/components/Hero";
import Section from "~/components/Section";
import Footer from "~/components/Footer";

import navIsOpen from "~/signals/nav/isOpen";

const linearGradientLight = `linear-gradient(var(--hope-colors-neutral-50), var(--hope-colors-neutral-300))`;
const linearGradientDark = `linear-gradient(var(--hope-colors-neutral-900), var(--hope-colors-neutral-700))`;

export default function News() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = navIsOpen;

  return (
    <main>
      <Box bg={linearGradientLight} _dark={{ bg: linearGradientDark}}>
        <Flex justifyContent="end">
          <Nav title="Menu" mx={8} my={4} py={2}>
            <VStack spacing={8}>
              <Button onClick={toggleColorMode}>
                Toggle { colorMode() === "light" ? "dark" : "light" } mode
              </Button>
              <Button w="100%" variant="plain" onClick={() => {
                setIsOpen(false);
                document.querySelector('a[href="/#section-May-2023"]').scrollIntoView();
              }}>
                May 2023
              </Button>
              <Button w="100%" variant="plain" onClick={() => { window.location.pathname = "/"; }}>
                Home Page
              </Button>
            </VStack>
          </Nav>
        </Flex>
        <Title>Foxcliff Chess Club</Title>
        <Hero />
        <VStack spacing={8}>
          <Section heading="May 2023">
            <Text m="2" size="xl">
              Congratulations to Club members who had success in recent tournaments:
            </Text>

            <Text m="2" size="xl">
              <ul>
                <li>The Martinsville High School Chess A Team finished 4th in the State</li>
                <li>Jackson Matthews won his division in the regional finals</li>
                <li>Carter Dawson finished third in the junior open division</li>
                <li>Kevin Huang finished 2nd in the State individual Championships</li>
                <li>Ryan Pilat finished in 7th in the State individual Championships</li>
              </ul>
            </Text>

            <Text m="2" size="xl">
              Kevin Huang, Ryan Pilat, and Joel Young, and their 4th teammate, Tom, completed in the Indiana Team Championships in Pittsboro, Indiana.
              Their team called “Dark Horse & the Kingslayers” won 2.5 rounds out of 4.
              They were the top team rated under 1500 (meaning they won a little money), and they tied for 3rd place overall!
            </Text>

            <Text m="2" size="xl">
              Congratulations, gentlemen!
            </Text>

            <Text m="2" size="xl">
              Many of our members volunteered to help run the Indiana Scholastic Championships held on March 18th at Martinsville High School.
            </Text>

            <Text m="2" size="xl">
              Congratulations to Bill Pilat who has taken the reigns of the President of the Scholastic Chess of Indiana.
            </Text>

            <Text m="2" size="xl">
              Three of our members will work to achieve the title of Club Tournament Director this year.
            </Text>

            <Text m="2" size="xl">
              Check out our new snazzy Foxcliff Chess Club T- Shirts.
            </Text>

            <Center>
              <Image src="/i/tshirt/front.jpg"/>
            </Center>
            <Center>
              <Image src="/i/tshirt/back.jpg"/>
            </Center>

            <Text m="2" size="xl">
              They are available in various sizes, and the prices range from $8.50 to $12.
            </Text>

            <Button mt="12" w="100%" variant="plain" onClick={() => { window.location.pathname = "/"; }}>
            Back to Home Page
            </Button>

          </Section>
        </VStack>
        <Footer />
      </Box>
    </main>
  );
}
