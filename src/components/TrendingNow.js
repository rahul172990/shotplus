import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import Card from './Card';

const TrendingNow = ({result}) => {
  return (
    <>
      <View style={styles.row}>
        <Text style={{color: 'white', marginLeft: 15, fontSize: 18}}>
          Trending Now
        </Text>

        <FlatList
          horizontal
          data={result}
          renderItem={(item) => (
            <Card
              label={item.item.label}
              name={item.item.name}
              image={item.item.images[1].url}
            />
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    marginTop: 20,
  },
});

export default TrendingNow;
