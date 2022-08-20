import { extendTheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

const theme = extendTheme({
  colors: {
    primary: "#91A919",
    secondary: "#d71b57",
    dark: "#1E2124",
    mushroom: "#7E7A67",
  },

  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: "bold", // Normally, it is "semibold"
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
      defaultProps: {
        size: "lg", // default is md
        variant: "sm", // default is solid
        colorScheme: "purple", // default is gray
      },
    },
  },
});

export default theme;
