import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Header from '../../components/header/Header';
import {styles} from './ControlsStyle';
import moment from 'moment';
const Controls = ({navigation}) => {
  const [today, setToday] = useState(moment().format('MMMM Do YYYY'));
  const [now, setNow] = useState(moment().format('h:mm:ss a'));

  useEffect(() => {
    setInterval(() => {
      setNow(moment().format('h:mm:ss a'));
      setToday(moment().format('MMMM Do YYYY'));
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.controls}>
        {/* Left Section */}
        <View style={styles.editorsContainer}>
          <View style={styles.editor}>
            <Text style={styles.editorText}>272.35</Text>
          </View>
          <View style={styles.editor}>
            <Text style={styles.editorText}>14000.36</Text>
          </View>
          <View style={styles.editor}>
            <Text style={styles.editorText}>20</Text>
          </View>
          <View style={styles.editor}>
            <Text style={styles.editorText}>05</Text>
          </View>
          <View style={styles.editor}>
            <Text style={styles.editorText}>00</Text>
          </View>
          <View style={styles.editor}>
            <Text style={styles.editorText}>Keyboard + Main</Text>
          </View>
          <View style={styles.editor}>
            <Text style={styles.editorText}>0</Text>
          </View>
          <View style={styles.editor}>
            <Text style={styles.editorText}>-100</Text>
          </View>
          <View style={styles.editor}>
            <Text style={styles.editorText}>{today}</Text>
          </View>
          <View style={styles.editor}>
            <Text style={styles.editorText}>{now}</Text>
          </View>
          <TouchableOpacity
            style={{
              ...styles.button,
              paddingVertical: 3,
              marginHorizontal: 20,
              marginVertical: 0,
              flex: 1,
            }}
            onPress={() => navigation.goBack()}>
            <Text style={styles.buttonLabel}>Back</Text>
          </TouchableOpacity>
        </View>
        {/* Right Section */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonLabel}>Rate</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonLabel}>Total Meter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonLabel}>Slow Flow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonLabel}>Fast Value</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonLabel}>Hide pulses</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonLabel}>Preset View</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonLabel}>Assembly</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonLabel}>Correction</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonLabel}>Date</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonLabel}>Time</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonLabel}>Printer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Controls;
