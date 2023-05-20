import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="h-screen flex items-center py-20">
      <div className="container">
        <h1 className="text-primary-600 text-6xl text-center font-bold mb-4">
          {siteConfig.title}
        </h1>
        <p className="text-center text-gray-400 text-2xl mb-5">
          {siteConfig.tagline}
        </p>
        <div className="flex items-center justify-center">
          <Link
            className="px-8 py-3 rounded-md bg-primary-600 uppercase text-sm font-bold no-underline hover:no-underline text-white hover:text-white hover:bg-black transition duration-200"
            to="/docs/introduction"
          >
            <span className="">Get started</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main></main>
    </Layout>
  );
}
