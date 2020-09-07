import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import TrackCard from './TrackCard';

const TracksList = ({result}) => {
  return (
    <>
      <View style={{flex: 1, marginTop: 20}}>
        <Text style={{color: 'white', marginLeft: 15, fontSize: 18}}>
          Tracks
        </Text>

        <FlatList
          horizontal
          data={result}
          renderItem={(item) => (
            <TrackCard image={item.item.album.images[1].url} />
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default TracksList;
