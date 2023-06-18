import React from "react";
import { Layout, Section, About, Projects } from "@components";
import { navLinks } from "../config";

const IndexPage = () => {
  return (
    <Layout>
      <About />
      <Projects />
      {navLinks.slice(1).map((section) => <Section n={section.url.slice(2)} title={section.name} />)}
    </Layout>
  );
};

export default IndexPage;
