import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  HStack,
  IconButton,
  Input,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaDiscord, FaTwitter, FaItchIo } from "react-icons/fa";
// import { Logo } from "./Logo";
import { links } from "./_data";

export const HomeFooter = () => (
  <Box bg="dark" color="white">
    <Container as="footer" role="contentinfo" maxW="full">
      <Stack
        spacing={{ base: "12", md: "8" }}
        direction={{ base: "column-reverse", lg: "row" }}
        py={{ base: "12", md: "16" }}
        justify="space-between"
      >
        <SimpleGrid
          columns={{ base: 2, md: 4 }}
          gap="8"
          width={{ base: "full", lg: "auto" }}
        >
          {links.map((group, idx) => (
            <Stack key={idx} spacing="4" minW={{ lg: "40" }}>
              <Text
                fontSize="sm"
                fontWeight="semibold"
                color="on-accent-subtle"
              >
                {group.title}
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                {group.links.map((link, idx) => (
                  <Button
                    key={idx}
                    as="a"
                    variant="link-on-accent"
                    href={link.href}
                  >
                    {link.label}
                  </Button>
                ))}
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
        <Stack spacing="4">
          <Text fontSize="sm" fontWeight="semibold" color="on-accent-subtle">
            Newsletter
          </Text>
          <Stack
            spacing="4"
            direction={{ base: "column", sm: "row" }}
            maxW={{ lg: "360px" }}
          >
            <Input
              placeholder="Enter your email"
              variant="outline-on-accent"
              type="email"
              required
            />
            <Button
              bg="secondaryLighter"
              color="dark"
              type="submit"
              flexShrink={0}
            >
              Subscribe
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Divider borderColor="bg-accent-subtle" />
      <Stack
        pb="12"
        pt="8"
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        align={{ base: "start", md: "center" }}
      >
        <HStack
          justify={{ base: "space-between", sm: "start" }}
          width={{ base: "full", sm: "auto" }}
          spacing="8"
        >
          {/* <Logo /> */}
          <ButtonGroup variant="ghost-on-accent">
            <IconButton
              as="a"
              href="#"
              aria-label="itch.io"
              icon={<FaItchIo fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Discord"
              icon={<FaDiscord fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </HStack>
        <Text fontSize="sm" color="on-accent-subtle">
          &copy; {new Date().getFullYear()} John Thomas | CC BY-SA
        </Text>
      </Stack>
    </Container>
  </Box>
);
