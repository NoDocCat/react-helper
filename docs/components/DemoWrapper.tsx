import React, { ReactNode } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import CodeBlock from "@theme/CodeBlock";

type Props = { source: string; type: "jsx" | "tsx"; children: ReactNode };

export const DemoWrapper: React.FC = (props: Props) => {
  const render = () => (
    <div className="demo_wrapper">
      <div className="demo">{props.children}</div>
      <CodeBlock className={props.type}>{props.source}</CodeBlock>
    </div>
  );

  return <BrowserOnly>{render}</BrowserOnly>;
};
