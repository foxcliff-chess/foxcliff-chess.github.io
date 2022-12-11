import { ParentProps } from "solid-js";
import { Box, Heading, VStack } from "@hope-ui/core";

type Props = {heading: string} & ParentProps
export default function Section(props: Props) {
  return (
    <Box>
      <VStack spacingY={2} mb={4}>
        <Box boxSize={12}>
        </Box>
        <Heading pb={12} mx={10} size="2xl">{props.heading}</Heading>
        <Box mx={4}>
          {props.children}
        </Box>
      </VStack>
    </Box>
  );
}
