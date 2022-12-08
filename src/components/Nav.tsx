import { createSignal, ParentComponent, ParentProps } from "solid-js";
import { Drawer, HStack, Icon, IconButton, IconProps } from "@hope-ui/core";

function HambugerIcon(props: IconProps) {
  return (
    <Icon viewBox="0 0 100 80" { ...props }>
      <rect width="100" height="20"></rect>
      <rect y="30" width="100" height="20"></rect>
      <rect y="60" width="100" height="20"></rect>
    </Icon>
  );
}

export default function Nav(props: ParentProps) {
    const [isOpen, setIsOpen] = createSignal(false);
    return (
      <>
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
    </>
  );
}
