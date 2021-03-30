import React from "react";
import { Typography, Button, Space } from "antd";
import { useBoolean } from "@ndct/react-helper";

export const UseBooleanDemo: React.FC = () => {
  const [state, dispatch] = useBoolean(true);

  return (
    <>
      <Typography.Paragraph>当前状态: {state.toString()}</Typography.Paragraph>
      <Space>
        <Button type="primary" onClick={() => dispatch()}>
          切换状态
        </Button>
        <Button onClick={() => dispatch(true)}>置为 True</Button>
        <Button onClick={() => dispatch(false)}>置为 False</Button>
      </Space>
    </>
  );
};
