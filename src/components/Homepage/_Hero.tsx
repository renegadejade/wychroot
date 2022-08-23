import {
  Badge,
  Box,
  Button,
  Circle,
  Heading,
  Img,
  LightMode,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
  VisuallyHidden,
} from "@chakra-ui/react";
import * as React from "react";
import { FaPlay } from "react-icons/fa";
import "@fontsource/source-code-pro";
import "@fontsource/passion-one";
import "@fontsource/oxanium";
import "@fontsource/kelly-slab";
import "@fontsource/roboto-slab";
import "@fontsource/roboto-condensed";
import "@fontsource/lilita-one";
// import * as Logos from "./Brands";

export const Hero = () => {
  return (
    <Box>
      <Box as="section" color="dark" py="5.5rem" bg="dark">
        <Box
          maxW={{ base: "xl", md: "5xl" }}
          mx="auto"
          px={{ base: "6", md: "8" }}
        >
          <Img src="/img/wychroot_logo.png"></Img>
          {/* <Box textAlign="center">
            <Heading
              as="h1"
              fontSize={{ base: "7xl", md: "8xl", lg: "9xl" }}
              maxW="48rem"
              mx="auto"
              lineHeight="1.2"
              fontFamily="Lilita One"
              fontWeight="400"
              fontStyle="normal"
            >
              Wychroot
            </Heading>

            <Text
              fontSize={{ base: "3xl", md: "4xl" }}
              fontFamily="Roboto Slab"
              fontWeight="500"
              fontStyle="normal"
              textTransform="uppercase"
            >
              Solarpunk Roleplaying.
            </Text>
            <Text
              fontSize={{ base: "3xl", md: "4xl" }}
              fontFamily="Roboto Slab"
              fontWeight="500"
              fontStyle="normal"
              textTransform="uppercase"
            >
              Forged in the Dark.
            </Text>
          </Box> */}

          <Stack
            justify="center"
            direction={{ base: "column", md: "row" }}
            mt="10"
            spacing="4"
          >
            <Button
              as="a"
              href="/rules/"
              size="xl"
              px="8"
              bg="dark"
              color="primary"
              fontFamily="Roboto Slab"
              fontWeight="700"
              fontStyle="normal"
              fontSize="2xl"
              textTransform="uppercase"
            >
              Read the Rules
            </Button>
            {/* <Button
                as="a"
                href="#"
                size="xl"
                px="8"
                color="dark"
                variant="outline"
                fontFamily="Source Code Pro"
                fontWeight="black"
                fontSize="xl"
              >
                MESHnet
              </Button> */}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
