import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import {todo_input} from '../styles';

const TodoInput = (props) => {
  const [text, setText] = useState('');

  return (
    <View style={todo_input.container}>
      <View style={todo_input.inputContainer}>
        <TextInput
          value={text}
          placeholder={'Type an item to do...'}
          placeholderTextColor={'#FFC312'}
          onChangeText={(val) => setText(val)}
          style={todo_input.inputText}
        />
      </View>

      <TouchableOpacity
        style={todo_input.buttonContainer}
        onPress={() => {
          props.onGetValue(text);
          setText('');
        }}>
        <Text style={todo_input.buttonText}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};

// export default TodoInput;
export {TodoInput};
