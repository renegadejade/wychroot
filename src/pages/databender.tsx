import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import RollDice from "../components/Dice/RollDice";
import { ChakraProvider } from "@chakra-ui/react";
import { Hero } from "../components/Homepage/Hero";
import { Features } from "../components/Playbooks/Databender/Features/Features";
import theme from "../css/theme";
import "@fontsource/open-sans";
import styles from "./home.module.css";
import { DatabenderHero } from "../components/Playbooks/Databender/DatabenderHero";

export default function Databender(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <ChakraProvider theme={theme}>
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />"
      >
        <DatabenderHero />
        <main className={styles.main}>
          <Features />
        </main>
      </Layout>
    </ChakraProvider>
  );
}
