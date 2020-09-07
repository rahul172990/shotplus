import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const TrackCard = (props) => {
  return (
    <View style={styles.card}>
      <Image
        style={{height: '100%', width: '100%'}}
        source={{uri: props.image}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 80,
    width: 80,
    marginLeft: 15,
    marginTop: 20,
    backgroundColor: 'white',
    elevation: 15,
    borderRadius: 10,
    borderColor: 'grey',
    overflow: 'hidden',
  },
  img: {
    flex: 1,
  },
});

export default TrackCard;
