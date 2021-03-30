import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

const Feature: React.FC<{ title: string; imageName: string; desc: string }> = props => (
  <div className={`col col--4 ${styles.feature}`}>
    <img src={`./features/${props.imageName}.svg`} alt="" />
    <h3>{props.title}</h3>
    <p>{props.desc}</p>
  </div>
);

const Home: React.FC = () => {
  const { siteConfig = {} } = useDocusaurusContext();

  return (
    <Layout>
      <header className={styles.header}>
        <h1>{siteConfig.title}</h1>
        <h2>{siteConfig.tagline}</h2>
        <Link className="button button--primary" to={useBaseUrl("docs/")}>
          Get Started
        </Link>
      </header>
      <main className={styles.main}>
        <div className="row">
          <Feature title="需求驱动" imageName="github" desc="提炼自日常开发和社区开源项目" />
          <Feature title="TypeScript" imageName="typescript" desc="使用 TypeScript 开发, 提供完整的类型定义文件" />
          <Feature title="开箱即用" imageName="box" desc="无需多余配置. 安装 引入 使用" />
        </div>
      </main>
    </Layout>
  );
};

export default Home;
