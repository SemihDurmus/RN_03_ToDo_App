import React from 'react';
import {Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.txt}> {props.title}</Text>
    </TouchableOpacity>
  );
};

export {Button};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.3,
    padding: 10,
    borderWidth: 3,
    borderColor: '#273c75',
    backgroundColor: '#273c75',
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: 'center',
  },

  txt: {
    color: '#fbc531',
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'center',
  },
});
