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
import * as React from "react";
import { features } from "./data";

export const GameFeatures = () => (
  <Box as="section" bg="secondary" color="dark">
    <Container
      py={{ base: "16", md: "20" }}
      maxW={{ base: "xl", md: "7xl" }}
      mx="auto"
    >
      <Stack spacing={{ base: "12", md: "16" }}>
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
              Game Overview
            </Heading>
          </Stack>
        </Stack>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          columnGap={8}
          rowGap={{ base: 10, md: 16 }}
        >
          {features.map((feature) => (
            <Stack
              key={feature.name}
              spacing={{ base: "4", md: "5" }}
              align="center"
              textAlign="center"
            >
              <Square
                size={{ base: "10", md: "12" }}
                bg="accent"
                color="inverted"
                borderRadius="lg"
                display={{ base: "none", md: "unset" }}
              >
                <Icon
                  as={feature.icon}
                  boxSize={{ base: "5", md: "10" }}
                  // color="secondary"
                />
              </Square>
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

                <Button
                  as="a"
                  href={feature.url}
                  variant="outline"
                  borderColor="dark"
                  border="2px"
                  size="md"
                  mx="auto"
                  w="60%"
                  alignSelf="center"
                  fontSize="large"
                  _hover={{ bg: "secondaryDarker", color: "dark" }}
                >
                  {feature.buttonText}
                </Button>
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  </Box>
);
