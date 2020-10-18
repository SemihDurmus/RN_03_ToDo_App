import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const XButton = (props) => {
  return (
    <TouchableOpacity
      style={styles.deleteButton}
      onPress={() => {
        setTodos((order) => {
          order.splice(props.index, 1);
          for (let i = 0; i < order.length; i++) {
            order[i].id = i;
          }
          return [...order];
        });
        setCounter(todos.length);
      }}>
      <Text style={styles.deleteButtonText}>{'❌'}</Text>
    </TouchableOpacity>
  );
};

export {XButton};

const styles = StyleSheet.create({
  deleteButton: {
    backgroundColor: '#efefef',
    borderRadius: 5,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
  },
});
