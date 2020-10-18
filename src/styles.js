import {StyleSheet} from 'react-native';

const color = '#FFC312';

const main = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303e45',
  },
  banner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  bannerText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#a7b6bd',
  },
  bannerNumber: {
    fontSize: 30,
    fontWeight: 'bold',
    color,
  },
  emptyComponent: {
    color: 'yellow',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
});

const todo_input = StyleSheet.create({
  container: {
    backgroundColor: '#a7b6bd',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  inputContainer: {
    backgroundColor: '#303e45',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  inputText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFC312',
  },
  buttonContainer: {
    backgroundColor: '#4a636e',
    marginHorizontal: 20,
    padding: 10,
    width: '50%',
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
});

const todo_card = StyleSheet.create({
  container: {
    backgroundColor: '#ced6e0',
    padding: 10,
    margin: 10,
    borderRadius: 8,
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export {main, todo_input, todo_card};
