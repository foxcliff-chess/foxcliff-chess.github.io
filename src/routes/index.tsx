import { Title } from "solid-start";
import { Box, Button, Flex, Text, VStack, useColorMode } from "@hope-ui/core";

import Nav from "~/components/Nav";
import Hero from "~/components/Hero";
import Section from "~/components/Section";
import Footer from "~/components/Footer";

import NextMeeting from "~/components/NextMeeting";
import NextMeetingCalendar from "~/components/NextMeetingCalendar";

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
          <Section heading="History">
            <Text m="2" size="xl">
            In the month of February 2022, a resident of Foxcliff North Estates, Martinsville, Indiana had posted a notice on the Foxcliff general email for anyone who wanted to play a game of chess.
            Following that notice, March 15 saw Steve Maney responding to the request, eager to talk to Joe Hovish about his request for competitors.
            Meeting at a local restaurant, the two believed that there may be others with a desire to play.
            The basic plan was to put the word out for players in whatever way possible.
            </Text>

            <Text m="2" size="xl">
            Notices were posted in local libraries and some businesses.
            Handouts were personally delivered to the chess clubs in Greenwood and Bloomington.
            Bill Pilat read one of the flyers and contacted Steve.
            After cell phone calls and emails, the three of them had an informal meeting in June along with Bill’s son, then a Junior at the local high school.
            Bill was a facilitator of the Artesian Chess Club and his son, a strong member of the team.
            Putting heads together, the group believed that the formation of a club was possible, especially with the participation of members of the high school team being invited.
            </Text>

            <Text m="2" size="xl">
            The first playing session was held on July 21 at the Manor House which is part of the Foxcliff North Estates.
            Attendance at the event was 30 individuals, both adults and youth.
            Bill undertook responsibility to provide sets, boards, clocks, and stationery.
            Steve and Joe were available to help explain the goal that the three hoped to develop.
            Bonnie Bray, a local artist, created the running fox with king, seen above, as our official motif.
            </Text>

            <Text m="2" size="xl">
            Since that first session, there has been a group play on the first and third Thursdays of the month.
            In addition, the first Thursday of each month had a 15-minute meeting before the 6:30 p.m.
            start to further plan for the formal establishment of a chess club.
            Those ‘business meetings' included discussions about the need for a constitution and bylaws.
            Factors were consider to included non-residents of Foxcliff, membership dues, youth participation, and officer establishment.
            </Text>

            <Text m="2" size="xl">
            Constitution and Bylaws were adopted on January 5, 2023, and the informal Foxcliff chess club became The FoxcliffChess Club.
            See that document in another section of this site.
            </Text>
          </Section>

          <Section heading="Calendar">
            <Text size="xl">We meet the 1st and 3rd Thursday of every month. Our next meeting will take place on <NextMeeting fontWeight="bold" /></Text>
            <NextMeetingCalendar />
          </Section>
        </VStack>
        <Footer />
      </Box>
    </main>
  );
}
