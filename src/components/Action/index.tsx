import * as React from "react";
import { actions } from "./actions";
import { Text } from "@chakra-ui/react";
import "@fontsource/roboto-slab";

interface ActionProps {
  name: string;
  description: string;
}

export const Action = (props: ActionProps) => (
  <Text fontFamily="Roboto Slab, serif" textTransform="uppercase">
    {props.name}
  </Text>
);
