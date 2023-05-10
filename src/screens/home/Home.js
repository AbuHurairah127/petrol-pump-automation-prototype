import React from 'react';
import {Button, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './HomeStyles';
import Header from '../../components/header/Header';
import {commonStyles} from '../../styles/styles';
import {CommonActions} from '@react-navigation/native';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.upperSectionContainer}>
        <View style={styles.upperSection}>
          <View style={styles.upperSectionValues}>
            <Text style={styles.upperSectionText}>Rupees</Text>
            <Text style={styles.upperSectionText}>Litres</Text>
            <Text style={styles.upperSectionText}>Price</Text>
          </View>
          <View style={styles.upperSectionValues}>
            <Text style={styles.upperSectionText}>300</Text>
            <Text style={styles.upperSectionText}>1.1</Text>
            <Text style={styles.upperSectionText}>272.20</Text>
          </View>
        </View>
      </View>
      <View style={styles.lowerSectionContainer}>
        <View style={styles.lowerSection}>
          <Text style={styles.lowerSectionText}>Events Log</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={commonStyles.button}
          onPress={() => navigation.navigate('Controls')}>
          <Text style={commonStyles.buttonLabel}>Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
