import {
  Box,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Square,
  Stack,
  Text,
  useBreakpointValue,
  Button,
  Link,
} from "@chakra-ui/react";
import { text } from "@fortawesome/fontawesome-svg-core";
import * as React from "react";
import { features } from "./data";

export const SettingFeatures = () => (
  <Box as="section" bg="secondary" color="dark">
    <Container
      py={{ base: "16", md: "20" }}
      maxW={{ base: "xl", md: "7xl" }}
      mx="auto"
    >
      <Stack spacing={{ base: "12", md: "16" }} alignItems="center">
        <Stack
          spacing={{ base: "4", md: "5" }}
          align="center"
          textAlign="center"
        >
          <Stack spacing="3">
            <Heading
              size="lg"
              fontFamily="Roboto Slab"
              textTransform="uppercase"
            >
              A science-fantasy setting
            </Heading>
          </Stack>
        </Stack>

        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          columnGap={8}
          rowGap={{ base: 10, md: 16 }}
        >
          {features.map((feature) => (
            <Stack
              key={feature.name}
              spacing={{ base: "4", md: "5" }}
              align="center"
              // textAlign="center"
              bg="secondaryLighter"
              px="4"
              py="4"
            >
              {/* <Square
                size={{ base: "10", md: "12" }}
                bg="accent"
                color="inverted"
                borderRadius="lg"
              >
                <Icon
                  as={feature.icon}
                  boxSize={{ base: "5", md: "10" }}
                  // color="secondary"
                />
              </Square> */}
              <Stack spacing={{ base: "1", md: "2" }}>
                <Text
                  fontSize={{ base: "lg", md: "2xl" }}
                  fontFamily="Roboto Slab"
                  fontWeight="bold"
                  fontStyle="normal"
                  textTransform="uppercase"
                >
                  {feature.name}
                </Text>
                <Text fontFamily="Roboto" fontWeight="600" fontSize="large">
                  {feature.description}
                </Text>
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
        <Button
          disabled
          // as="a"
          // href="#"
          bg="dark"
          color="primary"
          size="xl"
          fontSize="lg"
          fontFamily="Roboto Mono, monospace"
          _hover={{ bg: "primary", color: "dark" }}
        >
          Enter MESHnet
        </Button>
      </Stack>
    </Container>
  </Box>
);
