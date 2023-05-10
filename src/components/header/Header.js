import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './HeaderStyles';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.brandName}>Brand Name/logo </Text>
      </View>
      <View>
        <Text style={styles.heading}>
          Unit ID: <Text style={styles.values}>00</Text>
        </Text>
        <Text style={styles.heading}>
          Product: <Text style={styles.values}>Petrol</Text>
        </Text>
      </View>
    </View>
  );
};

export default Header;
