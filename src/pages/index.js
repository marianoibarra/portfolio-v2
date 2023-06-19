import React from "react";
import { Layout, Jobs, About, Projects } from "@components";

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
