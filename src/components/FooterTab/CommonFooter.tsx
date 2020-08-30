import React from 'react';
import { View, Text } from 'react-native';
import { Container, Footer, FooterTab, Badge, Icon, Button } from 'native-base';
import styles from './styles';

type CommonFooterProps = {
  children?: any;
  style?: any;
};

const CommonFooter = (props: CommonFooterProps) => {
  return (
    <Container>
      <View style={{ ...props.style, ...styles.container }}>
        {props.children}
      </View>
      <Footer>
        <FooterTab>
          <Button badge vertical>
            <Badge>
              <Text>2</Text>
            </Badge>
            <Icon name="apps" />
            <Text>Apps</Text>
          </Button>
          <Button vertical>
            <Icon name="camera" />
            <Text>Camera</Text>
          </Button>
          <Button active badge vertical>
            <Badge>
              <Text>51</Text>
            </Badge>
            <Icon active name="navigate" />
            <Text>Navigate</Text>
          </Button>
          <Button vertical>
            <Icon name="person" />
            <Text>Contact</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

export default CommonFooter;
