import { ParentProps } from "solid-js";
import { Anchor, Box, Divider, Heading, VStack } from "@hope-ui/core";

type Props = {heading: string, slug?: string} & ParentProps
export default function Section(props: Props) {
  const slug = props.slug || props.heading.replace(/\W+/g, '-');

  return (
    <Box maxW={880}>
      <VStack spacingY={12} my={12}>
        <Divider labelPlacement="center" thickness="3px">
          <Anchor href={`/#section-${slug}`}>
            <Heading size="2xl">{props.heading}</Heading>
          </Anchor>
        </Divider>
        <Box mx={4}>
          {props.children}
        </Box>
      </VStack>
    </Box>
  );
}
