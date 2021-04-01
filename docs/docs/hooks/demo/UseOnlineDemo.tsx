import React from "react";
import { Typography } from "antd";
import { useOnline } from "@ndct/react-helper";

export const UseOnlineDemo: React.FC = () => {
  const isOnline = useOnline();

  return <Typography.Text>当前联网状态: {isOnline.toString()}</Typography.Text>;
};
