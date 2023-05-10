import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {styles} from './HomeStyles';
import Header from '../../components/header/Header';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.upperSection}></View>
      <View style={styles.lowerSection}></View>
      <View style={styles.footer}></View>
    </SafeAreaView>
  );
};

export default Home;
