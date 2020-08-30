import React from 'react';
import { Text, Badge, Icon, Button } from 'native-base';

type FooterButtonProps = {
  title: string;
  icon: string;
  active?: boolean;
  badge?: number;
  onPress?(): void;
};

const FooterButton = (props: FooterButtonProps) => {
  const { badge, active } = props;
  const badgeComponent =
    badge === undefined ? null : (
      <Badge>
        <Text>{badge}</Text>
      </Badge>
    );
  return (
    <Button vertical badge={!!badge} active={!!active} onPress={props.onPress}>
      {badgeComponent}
      <Icon name={props.icon} />
      <Text>{props.title}</Text>
    </Button>
  );
};

export default FooterButton;
