import { createSignal } from "solid-js";
import { IconButton, Drawer, HStack } from "@hope-ui/core";

export default function Nav() {
    const [isOpen, setIsOpen] = createSignal(false);
    return (
      <>
      <IconButton size="lg" border="none" aria-label="Navigation" onClick={() => setIsOpen(true)}>
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
        <Drawer isOpen={isOpen()} onClose={() => setIsOpen(false)}>
          <Drawer.Overlay />
          <Drawer.Content p={4}>
            <HStack justifyContent="space-between" mb={4}>
              <Drawer.Heading fontWeight="semibold">Title</Drawer.Heading>
              <Drawer.CloseButton />
            </HStack>
            <p>The content of the Drawer.</p>
          </Drawer.Content>
        </Drawer>
      </IconButton>
    </>
  );
}
