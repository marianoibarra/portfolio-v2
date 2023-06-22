import React from "react";
import { Layout, Jobs, About, Projects } from "@components";

export const Head = () => {
  return (
    <>
      <title>Mariano Ibarra</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
      <link rel="manifest" href="/site.webmanifest"></link>
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0f172a"></link>
      <meta name="msapplication-TileColor" content="#0f172a"></meta>
    </>
  )
}

const IndexPage = () => {
  return (
    <Layout>
      <About />
      <Jobs />
      <Projects />
    </Layout>
  );
};

export default IndexPage;
