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
} from "@chakra-ui/react";
import * as React from "react";
import { features } from "./data";

export const Features = () => (
  <Box as="section" bg="primary">
    <Container
      py={{ base: "16", md: "24" }}
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
            <Heading size={useBreakpointValue({ base: "sm", md: "md" })}>
              Why play?
            </Heading>
          </Stack>
          <Text color="muted" fontSize={{ base: "lg", md: "xl" }} maxW="3xl">
            A bundle of 210+ ready-to-use, responsive and accessible components
            with clever structured sourcode files.
          </Text>
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
              >
                <Icon as={feature.icon} boxSize={{ base: "5", md: "10" }} />
              </Square>
              <Stack spacing={{ base: "1", md: "2" }}>
                <Text
                  fontSize={{ base: "lg", md: "2xl" }}
                  fontFamily="Oxanium"
                  fontWeight="700"
                  fontStyle="normal"
                  textTransform="uppercase"
                >
                  {feature.name}
                </Text>
                <Text fontWeight="semibold" fontSize="lg">
                  {feature.description}
                </Text>
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  </Box>
);
