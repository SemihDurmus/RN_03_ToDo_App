import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const InputArea = () => {
  return (
    <View style={styles.input}>
      <TextInput
        style={styles.inputText}
        onChangeText={(val) => setText(val)}
        placeholder={'Enter a ToDo item..'}
        value={text}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          AddToList(text);
          setText('');
          setCounter(todos.length == undefined ? 0 : todos.length + 1);
        }}>
        <Text style={styles.buttonText}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};

export {InputArea};

const styles = Stylesheet.create({
  input: {
    flex: 2,
    backgroundColor: '#B0BFC6',
    margin: 10,
    marginVertical: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    minHeight: 110,
    maxHeight: 170,
  },
  inputText: {
    backgroundColor: '#EBEFF2',
    width: '90%',
    minHeight: 55,
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingLeft: 10,
    fontSize: 17,
  },
  button: {
    backgroundColor: '#546F7A',
    padding: 10,
    marginBottom: 5,
    borderRadius: 10,
    borderColor: '#FFA827',
    borderWidth: 1,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FCFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
