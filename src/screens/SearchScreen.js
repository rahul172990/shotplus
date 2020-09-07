import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  FlatList,
} from 'react-native';

import SearchBar from '../components/SearchBar';
import SearchCard from '../components/SearchCard';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const getGenres = async () => {
    const uri = `https://api.spotify.com/v1/search?q=${query}&type=album,artist,track,playlist&limit=20`;
    const res = await fetch(uri, {
      method: 'GET',
      headers: {
        Authorization: `Bearer BQBH_4Gkzpti7LCrKvPc1VIMz2BzmDxJGn0akfnfYw41I_udZNG9rWYXBvCw3oLgviBdcQe_LMGPIoozqbKKVfKN0E6l6DrfH1znglfmjHyd2-rkOiBYoJLFFqvKteijHw0noqOgH2o3N-leid48iP8FGTx8dq3A97DaEPyZT8ht2_4QJInH-00BxeUMbE_XVMIsa3uYt_OYcur0AZI3ZwqgKDROATMwoaKaku4v1g`,
      },
    });
    const result = await res.json();

    setResponse(result.albums.items);
  };

  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <SearchBar
        getSearch={(text) => {
          setQuery(text);
        }}
        value={query}
        onInput={getGenres}
      />

      <View style={styles.row}>
        <FlatList
          numColumns={2}
          data={response}
          renderItem={(item) => (
            <SearchCard
              label={item.item.label}
              name={item.item.name}
              image={item.item.images[1].url}
              artist={item.item.artists.map((item) => item.name)}
            />
          )}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  row: {
    marginVertical: 0,
    marginBottom: 70,
  },
});
export default SearchScreen;
