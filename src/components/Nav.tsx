import { ParentProps } from "solid-js";
import { Box, Drawer, HStack, Icon, IconButton, IconProps } from "@hope-ui/core";

import navIsOpen from "~/signals/nav/isOpen";

function HambugerIcon(props: IconProps) {
  return (
    <Icon viewBox="0 0 100 80" { ...props } _dark={{ fill: "neutral.200" }} >
      <rect width="100" height="20"></rect>
      <rect y="30" width="100" height="20"></rect>
      <rect y="60" width="100" height="20"></rect>
    </Icon>
  );
}

export default function Nav(props: ParentProps) {
    const [isOpen, setIsOpen] = navIsOpen;
    return (
      <Box {...props}>
      <IconButton as="a" aria-label="Menu" size="lg" variant="plain" colorScheme="neutral" onClick={() => setIsOpen(true)}>
        <HambugerIcon boxSize="14" />
        <Drawer isOpen={isOpen()} onClose={() => setIsOpen(false)}>
          <Drawer.Overlay />
          <Drawer.Content p={4}>
            <HStack justifyContent="space-between" mb={4}>
             <Drawer.Heading fontWeight="semibold">{props.title}</Drawer.Heading>
             <Drawer.CloseButton />
            </HStack>

            {props.children}
          </Drawer.Content>
        </Drawer>
      </IconButton>
    </Box>
  );
}
