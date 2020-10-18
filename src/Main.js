import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  FlatList,
} from 'react-native';
import {main} from './styles';
// import TodoInput from './components/TodoInput';

import {TodoInput, TodoCard} from './components';

const App = () => {
  const [list, setList] = useState([]);

  // function addTodo(text) {
  //   const element = {
  //     id: list.length,
  //     todo: text,
  //     isDone: false,
  //   };

  //   const newArray = [...list, element];
  //   setList(newArray);
  // }

  function addTodo(text) {
    text === ''
      ? alert('You should enter an item')
      : setList(() => {
          return [...list, {id: list.length, todo: text, isDone: false}];
        });
  }

  function doneTodo(todoId) {
    const newArray = [...list];
    const todoIndex = newArray.findIndex((item) => item.id == todoId);

    newArray[todoIndex].isDone = !newArray[todoIndex].isDone;

    setList(newArray);
  }

  function removeTodo(todoId) {
    const newArray = [...list];
    const todoIndex = newArray.findIndex((item) => item.id === todoId);

    newArray.splice(todoIndex, 1);
    setList(newArray);
  }

  const renderTodo = ({item}) => {
    return (
      <TodoCard
        data={item}
        onDone={() => doneTodo(item.id)}
        onRemove={() => removeTodo(item.id)}
      />
    );
  };

  return (
    <SafeAreaView style={main.container}>
      <KeyboardAvoidingView
        style={main.container}
        behavior={Platform.OS === 'ios' ? 'padding' : null}>
        {/* ----------BANNER--------------------- */}
        <View style={main.banner}>
          <Text style={main.bannerText}>TODO</Text>
          <Text style={main.bannerNumber}>
            {list.filter((t) => t.isDone === false).length}
          </Text>
        </View>
        {/* -------------FLATLIST----------------- */}
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={list}
          renderItem={renderTodo}
          ListEmptyComponent={() => (
            <Text style={main.emptyComponent}>Nothing to do for now</Text>
          )}
        />
        {/* ---------------GET VALUE--------------- */}
        <TodoInput onGetValue={(textValue) => addTodo(textValue)} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default App;
