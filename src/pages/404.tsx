import React from "react";

import Layout from "../components/llayout";
import SEO from "../components/sseo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&apos;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
