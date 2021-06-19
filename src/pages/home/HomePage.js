import React from 'react';
import Geolocation from '@react-native-community/geolocation';

import {Alert, Button} from 'react-native';

import {HomeContainer, HomeText} from './HomePage.styles';

const getLocation = () => {
  Geolocation.getCurrentPosition(
    position => {
      const initialPosition = JSON.stringify(position);
      console.log(initialPosition);
    },
    error => Alert.alert('Error', JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
  );
};

const HomePage = () => {
  return (
    <HomeContainer>
      <HomeText>Welcome to the app!</HomeText>
      <Button title="Get location!" onPress={() => getLocation()} />
    </HomeContainer>
  );
};

export default HomePage;
