import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/roboto-slab";
import "@fontsource/roboto-condensed";
import "@fontsource/roboto";
import "@fontsource/roboto-mono";
import "@fontsource/source-code-pro";
import theme from "../css/theme";

// Default implementation, that you can customize
export default function Root({ children }) {
  return <>{children}</>;
}
