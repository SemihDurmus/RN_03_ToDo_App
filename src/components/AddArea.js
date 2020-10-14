import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  useState,
} from 'react-native';

const AddArea = ({holder, type, pass_visible}) => {
  const Add = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.input_area}>
        <TextInput style={styles.input} placeholder="Write items here..." />
      </View>
      <TouchableOpacity style={styles.button} onPress={Add}>
        <Text style={styles.addtext}>ADD TODO</Text>
      </TouchableOpacity>
    </View>
  );
};

export {AddArea};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.9,
    borderRadius: 20,
    backgroundColor: '#b0bec5',
    height: Dimensions.get('window').height * 0.2,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  input_area: {
    width: '90%',
    backgroundColor: '#eceff1',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
  },
  input: {
    fontSize: 18,
  },
  button: {
    backgroundColor: '#546e7a',
    width: '40%',
    padding: 15,
    borderRadius: 10,
  },
  addtext: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
