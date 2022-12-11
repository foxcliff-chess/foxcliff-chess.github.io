import { Box, Flex, Heading, Icon, IconProps, Spacer } from "@hope-ui/core";

function HeroIcon(props: IconProps ) {
  return (
    <Icon style={{ height: "168px", width: "168px"}} height="100%" width="100%" role="img" _light={{ fill: "warning.100" }} _dark={{ fill: "neutral.200" }} viewBox="0 0 168 150" aria-label="Foxcliff Chess Club" {...props}>
      <g mask="url(#hero-logo)">
        <circle cx="84" cy="84" r="84"></circle>
        <image style={{ height: "100%", width: "100%" }} href="favicon.ico"></image>
      </g>
    </Icon>
  );
}

export default function Hero() {
  return (
    <Box bg="warning.400" _dark={{ bg: "warning.800" }}>
      <Flex>
        <Box>
         <HeroIcon mx={14} mt={10} mb={4} />
        </Box>
        <Spacer />
      </Flex>
      <Box>
        <Heading pb={12} mx={10} size="4xl">Foxcliff Chess Club</Heading>
      </Box>
    </Box>
  );
}
