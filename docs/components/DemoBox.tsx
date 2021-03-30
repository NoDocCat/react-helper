import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import CodeBlock from "@theme/CodeBlock";
import styles from "./DemoBox.module.css";

type Props = { source: string; type: "jsx" | "tsx" };

export const DemoBox: React.FC<Props> = props => {
  const render = () => (
    <>
      <div className={styles.demo}>{props.children}</div>
      <CodeBlock className={props.type}>{props.source}</CodeBlock>
    </>
  );

  return <BrowserOnly>{render}</BrowserOnly>;
};
