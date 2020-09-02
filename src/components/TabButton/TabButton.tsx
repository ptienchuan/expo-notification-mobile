import React, { ReactNode } from "react";
import { Text, Badge, Button } from "native-base";

type TabButtonProps = {
  title: string;
  icon: ReactNode;
  active?: boolean;
  badge?: number | string;
  onPress?(): void;
};

const TabButton = ({ title, icon, badge, active, onPress }: TabButtonProps) => {
  const badgeComponent =
    badge === undefined ? null : (
      <Badge>
        <Text>{badge}</Text>
      </Badge>
    );
  return (
    <Button vertical badge={!!badge} active={!!active} onPress={onPress}>
      {badgeComponent}
      {icon}
      <Text>{title}</Text>
    </Button>
  );
};

export default TabButton;
