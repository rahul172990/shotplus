import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const SearchCard = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.img}>
        <Image
          style={{height: '100%', width: '100%'}}
          source={{uri: props.image}}
        />
      </View>
      <View style={styles.txt}>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.tx}>
          {props.artist + ' '}
        </Text>
        <Text ellipsizeMode="tail" numberOfLines={3} style={styles.t}>
          {props.name}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 180,
    width: 150,
    marginLeft: 15,
    marginTop: 20,
    backgroundColor: 'white',
    elevation: 15,
    borderRadius: 10,
    borderColor: 'grey',
    overflow: 'hidden',
  },
  img: {
    flex: 3,
  },
  txt: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  tx: {
    flex: 1,
    color: 'black',
    fontSize: 10,
    marginHorizontal: 5,

    textAlign: 'center',
  },
  t: {
    flex: 2,
    color: 'black',
    fontSize: 12,
    marginTop: 2,
    marginHorizontal: 5,
    textAlign: 'center',
    width: '80%',
  },
});

export default SearchCard;
