import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../css/theme";
import "@fontsource/roboto-slab";
import "@fontsource/roboto-condensed";
import "@fontsource/roboto";
import "@fontsource/roboto-mono";
import Layout from "@theme/Layout";
import { Hero } from "../components/Homepage/Hero";
import { GameFeatures } from "../components/Homepage/GameFeatures";
import { SettingFeatures } from "../components/Homepage/SettingFeatures";
import { PlannedFeatures } from "../components/Homepage/PlannedFeatures";
import { HomeFooter } from "../components/Homepage/HomeFooter";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        {/* <head>
          <title>${siteConfig.title}</title>
          <meta
            name="description"
            content="Science-fantasy solarpunk roleplaying. Forged in the Dark."
          />
        </head> */}
        <Hero />
        <GameFeatures />
        <SettingFeatures />
        <PlannedFeatures />
        {/* <HomeFooter /> */}
      </Layout>
    </ChakraProvider>
  );
}
