import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  Img,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import * as React from "react";

export const DatabenderHero = () => (
  <Box as="section" bg="#CD4D73">
    <Box position="relative" height={{ lg: "720px" }}>
      <Container
        py={{ base: "16", md: "48" }}
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
        >
          <Stack
            spacing={{ base: "8", md: "12" }}
            alignItems={{ base: "center", lg: "baseline" }}
          >
            <Stack spacing="4" alignItems={{ base: "center", lg: "baseline" }}>
              <Stack
                spacing={{ base: "4", md: "6" }}
                maxW={{ md: "xl", lg: "md", xl: "xl" }}
                alignItems={{ base: "center", lg: "baseline" }}
              >
                <Heading size="4xl" fontFamily="Prater Sans">
                  <Text fontSize="2xl" fontFamily="Prater Serif">
                    Introducting the
                  </Text>{" "}
                  Databender
                </Heading>
                <Text
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontFamily="Prater Serif"
                >
                  Curious & Spiritual MESHnet Hackers
                </Text>
              </Stack>
            </Stack>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing="3"
              alignItems={{ base: "center", lg: "baseline" }}
            >
              <Button
                // as="a"
                // href="#"
                size={useBreakpointValue({ base: "xl", md: "lg" })}
                px="8"
                bg="dark"
                color="secondary"
                fontFamily="Prater Serif"
                fontWeight="700"
                fontStyle="normal"
                fontSize="2xl"
                textTransform="uppercase"
              >
                The Rules
              </Button>
            </Stack>
          </Stack>
          <Box
            pos={{ lg: "absolute" }}
            right="0"
            bottom="0"
            w={{ base: "full", lg: "50%" }}
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
