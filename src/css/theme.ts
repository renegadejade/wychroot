import { extendTheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import "@fontsource/roboto-condensed";
import "@fontsource/source-code-pro";

const theme = extendTheme({
  colors: {
    primary: "#91A919",
    secondary: "#d71b57",
    secondaryDarker: "#b7174a",
    secondaryLighter: "#e5316b",
    dark: "#1b1b1d",
    mushroom: "#7E7A67",
  },
  fonts: {
    code: `'Source Code Pro', monospace`,
  },
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontFamily: "Roboto Condensed, sans-serif",
        fontWeight: "700",
        fontStyle: "normal",
        fontSize: "2xl",
        textTransform: "uppercase",
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },
      // 3. We can add a new visual variant
      //   variants: {
      //     "with-shadow": {
      //       bg: "red.400",
      //       boxShadow: "0 0 2px 2px #efdfde",
      //     },
      // 4. We can override existing variants
      // solid: (props: StyleFunctionProps) => ({
      //   bg: props.colorMode === "dark" ? "red.300" : "red.500",
      // }),
      // 5. We can add responsive variants
      // sm: {
      //   bg: "teal.500",
      //   fontSize: "md",
      // },
      //   },
      // 6. We can overwrite defaultProps
      // defaultProps: {
      //   size: "lg", // default is md
      //   variant: "sm", // default is solid
      //   colorScheme: "purple", // default is gray
      // },
    },
  },
});

export default theme;
