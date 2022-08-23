import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import RollDice from "../components/Dice/RollDice";
import { background, ChakraProvider, LightMode } from "@chakra-ui/react";
import { Hero } from "../components/Homepage/Hero";
import { GameFeatures } from "../components/Homepage/GameFeatures";
import theme from "../css/theme";
import "@fontsource/open-sans";
import styles from "./home.module.css";
import "@fontsource/roboto-slab";
import "@fontsource/roboto-condensed";
import "@fontsource/roboto";
import { SettingFeatures } from "../components/Homepage/SettingFeatures";
import { PlannedFeatures } from "../components/Homepage/PlannedFeatures";
import { HomeFooter } from "../components/Homepage/HomeFooter";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/rules/">
            Wychroot Intro - 5min ⏱️
          </Link>
        </div>
        <RollDice />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <ChakraProvider theme={theme}>
      <head>
        <title>${siteConfig.title}</title>
        <meta
          name="description"
          content="Science-fantasy solarpunk roleplaying. Forged in the Dark."
        />
      </head>
      {/* <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />"
      > */}
      <Hero />

      <GameFeatures />
      <SettingFeatures />
      <PlannedFeatures />
      <HomeFooter />

      {/* </Layout> */}
    </ChakraProvider>
  );
}
