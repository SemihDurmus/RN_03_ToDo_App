import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {todo_card} from '../styles';

const TodoCard = (props) => {
  return (
    <TouchableOpacity
      style={todo_card.container}
      onPress={() => props.onDone()}
      onLongPress={() => props.onRemove()}>
      <Text
        style={[
          todo_card.text,
          {
            color: props.data.isDone ? '#009432' : '#b33939',
            // textDecorationLine: props.data.isDone ? 'line-through' : null,
          },
        ]}>
        {props.data.todo}
      </Text>
    </TouchableOpacity>
  );
};

export {TodoCard};
