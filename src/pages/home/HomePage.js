import React from 'react';

import {Button} from 'react-native';

import {HomeContainer, HomeText} from './HomePage.styles';

const HomePage = () => {
  return (
    <HomeContainer>
      <HomeText>Welcome to the app!</HomeText>
      <Button title="Click here!" onPress={() => console.log('You clicked!')} />
    </HomeContainer>
  );
};

export default HomePage;
