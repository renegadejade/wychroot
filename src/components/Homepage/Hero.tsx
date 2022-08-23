import {
  Badge,
  Box,
  Button,
  color,
  Container,
  Heading,
  Icon,
  Img,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import * as React from "react";
import { FaDiscord, FaDice } from "react-icons/fa";

export const Hero = () => (
  <Box as="section" bg="primary" color="dark">
    <Box position="relative">
      <Container
        pt={{ base: "16", lg: "48" }}
        pb={{ md: "0", lg: "48" }}
        height="full"
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
      >
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: "16" }}
          align={{ lg: "center" }}
          alignItems={{ base: "center", lg: "baseline" }}
          height="full"
          pl={{ lg: "16" }}
        >
          <Stack spacing={{ base: "8", md: "12" }} alignItems="center">
            <Stack spacing="4" alignItems="center">
              <Stack
                spacing={{ base: "2", md: "2" }}
                maxW={{ md: "xl", lg: "md", xl: "xl" }}
                alignItems="center"
              >
                <Heading
                  size="4xl"
                  fontFamily="Noir Lullaby"
                  textTransform="uppercase"
                  fontWeight="bold"
                >
                  Wychroot
                </Heading>
                <Text fontSize="2xl" fontFamily="Roboto Slab">
                  a solarpunk rpg
                </Text>
              </Stack>
            </Stack>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing="3"
              alignItems="center"
            >
              <Button
                // as="a"
                // href="#"
                size={useBreakpointValue({ base: "xl", md: "lg" })}
                px="8"
                bg="dark"
                color="primary"
              >
                {/* <Icon
                  as={FaDice}
                  boxSize="7"
                  mr="2"
                  // color="secondary"
                /> */}
                Read the Rules
              </Button>
              <Button
                variant="outline"
                borderColor="dark"
                border="2px"
                fontFamily="Roboto Mono, monospace"
                size={useBreakpointValue({ base: "xl", md: "lg" })}
              >
                {/* <Icon
                  as={FaDiscord}
                  boxSize="7"
                  mr="2"
                  // color="secondary"
                /> */}
                Enter MESHnet
              </Button>
            </Stack>
            <Text
              fontSize={{ base: "xl", md: "xl" }}
              fontFamily="Roboto Condensed"
            >
              Playtest Alpha v0.1 Now Available
            </Text>
          </Stack>
          <Box
            pos={{ lg: "absolute" }}
            right="0"
            bottom="0"
            w={{ base: "100vw", lg: "50%" }}
            height={{ base: "96", lg: "full" }}
            sx={{
              clipPath: { lg: "polygon(7% 0%, 100% 0%, 100% 100%, 0% 100%)" },
            }}
          >
            <Img
              boxSize="full"
              objectFit="cover"
              src="/img/playbooks/databender.png"
              alt="Databender"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  </Box>
);
