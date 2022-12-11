// @refresh reload
import { ColorModeScript, HopeProvider, injectCriticalStyle } from "@hope-ui/core";
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";

export default function Root() {
  injectCriticalStyle();

  return (
    <Html lang="en">
      <Head>
        <Title>Foxcliff Chess Club</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <ColorModeScript initialColorMode="light" />
        <HopeProvider initialColorMode="light">
          <Suspense>
            <ErrorBoundary>
              <Routes>
                <FileRoutes />
              </Routes>
            </ErrorBoundary>
          </Suspense>
        </HopeProvider>
        <Scripts />
      </Body>
    </Html>
  );
}
