import { Anchor, Box, HStack, Spacer } from "@hope-ui/core";

export default function Footer() {
  return (
    <Box my={8} py={4} px={4} color={"neutral.200"} bg={"neutral.900"} _dark={{ bg: "neutral.100", color: "neutral.900" }}>
      <HStack justifyContent="end">
        <Anchor href="https://www.github.com/foxcliff-chess" isExternal>
          Github
        </Anchor>
        <Spacer />
        <Anchor href="https://www.facebook.com/FoxcliffChess" isExternal>
          Facebook
        </Anchor>
      </HStack>
    </Box>
  );
}
