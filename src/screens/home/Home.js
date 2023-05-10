import React from 'react';
import {Button, Text} from 'react-native';

const Home = ({navigation}) => {
  return (
    <>
      <Text>Home</Text>
      <Button onPress={() => navigation.navigate('Controls')} title="Controls">
        {/* <Text>Controls</Text> */}
      </Button>
    </>
  );
};

export default Home;
