import React from 'react';
import { Actions } from 'react-native-router-flux';
import {
  Button,
  Text,
} from 'native-base';

import AppLayout from '../../ui/AppLayout';

const Home = () => (
  <AppLayout pageTitle="Home">
    <Button onPress={() => Actions.pop()}>
      <Text>Cofnij</Text>
    </Button>
  </AppLayout>
);

export default Home;
