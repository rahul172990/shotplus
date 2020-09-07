import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.img}>
        <Image
          style={{height: '100%', width: '100%'}}
          source={{uri: props.image}}
        />
      </View>
      <View style={styles.txt}>
        <Text style={styles.tx}>{props.label}</Text>
        <Text style={styles.t}>{props.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 180,
    width: 200,
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
    marginVertical: 1,
    justifyContent: 'center',
  },
  tx: {
    color: 'black',
    fontSize: 16,
  },
  t: {
    color: 'black',
    fontSize: 14,
  },
});

export default Card;
