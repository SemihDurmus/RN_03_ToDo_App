import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from 'react-native';

import {Header} from './components/Header';
import {AddArea} from './components/AddArea';

const Todo = () => {
  const [counter, setCounter] = useState(0);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#38474F'}}>
      <ScrollView>
        <Header />
        {/* <Items /> */}
        <AddArea />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Todo;
