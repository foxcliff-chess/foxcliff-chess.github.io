import { ParentProps } from "solid-js";
import { Box, Divider, Heading, VStack } from "@hope-ui/core";

type Props = {heading: string} & ParentProps
export default function Section(props: Props) {
  return (
    <Box maxW={880}>
      <VStack spacingY={12} my={12}>
        <Divider labelPlacement="center" thickness="3px"><Heading size="2xl">{props.heading}</Heading></Divider>
        <Box mx={4}>
          {props.children}
        </Box>
      </VStack>
    </Box>
  );
}
