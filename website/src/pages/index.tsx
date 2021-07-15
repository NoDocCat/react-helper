import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

const Home: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title}>
      <header className={styles.header}>
        <h1 className={styles.title}>{siteConfig.title}</h1>
        <h2 className={styles.description}>{siteConfig.tagline}</h2>
        <div className={styles.buttonContainer}>
          <Link className="button button--primary button--lg" to="/docs/">
            快速开始
          </Link>
        </div>
      </header>
    </Layout>
  );
};

export default Home;
