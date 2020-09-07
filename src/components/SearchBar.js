import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/EvilIcons';

const SearchBar = (props) => {
  return (
    <>
      <View style={styles.row}>
        <Icon
          style={{marginLeft: 10}}
          name="search"
          size={30}
          color="#D5DBDB"
        />
        <TextInput
          placeholder="seach"
          placeholderTextColor="#D5DBDB"
          style={styles.input}
          value={props.value}
          onChangeText={props.getSearch}
          onTextInput={props.onInput}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    marginTop: 20,
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'black',
    backgroundColor: '#372248',
    borderRadius: 20,
  },
  input: {
    width: '90%',
    height: 40,
    fontSize: 16,
    color: '#F2F3F4',
  },
});

export default SearchBar;
