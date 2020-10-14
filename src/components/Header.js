import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.top}>TODO</Text>
      </View>
      <View>
        <Text style={styles.top}>0</Text>
      </View>
    </View>
  );
};

export {Header};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },

  top: {
    fontSize: 40,
    color: '#ffa726',
    fontWeight: 'bold',
  },
});
