import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TextInput,
} from 'react-native';

import SearchBar from '../components/SearchBar';
import TrendingNow from '../components/TrendingNow';
import LinearGradient from 'react-native-linear-gradient';
import TracksList from '../components/TracksList';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Home = () => {
  const [trendingResult, setTrendingResult] = useState('');
  const [tracks, setTracks] = useState('');
  const getToken = async () => {
    const result = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Conntent-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });
    const data = await result.json();
    console.log(data.access_token);
    return data.access_token;
  };

  const trending = async () => {
    const uri = `https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc&market=NZ`;
    const res = await fetch(uri, {
      method: 'GET',
      headers: {
        Authorization: `Bearer BQDae2sLJ8eV2iJ2O0E74TAOhx_FfLg8tVqLj3QrvoI3eJvW88SrdQrPT2AfbSA-whwGHE5eq1T-pL-qtWASqBI8wsTGmhVeLSEEbly1pGcA8dgvbc1dhsZhAzyoabXhlerYGZNunCvGoaYflky99X4ZlgZOQQd8nGC6xWk0uwZJhkvwPLesK1k`,
      },
    });
    const result = await res.json();

    setTrendingResult(result.albums);
  };

  const Tracks = async () => {
    const uri = `https://api.spotify.com/v1/tracks?ids=7ouMYWpwJ422jRcDASZB7P,4VqPOruhp5EdPBeR92t6lQ,2takcwOaAZWiXQijPHIx7B&market=ES`;
    const res = await fetch(uri, {
      method: 'GET',
      headers: {
        Authorization: `Bearer BQDae2sLJ8eV2iJ2O0E74TAOhx_FfLg8tVqLj3QrvoI3eJvW88SrdQrPT2AfbSA-whwGHE5eq1T-pL-qtWASqBI8wsTGmhVeLSEEbly1pGcA8dgvbc1dhsZhAzyoabXhlerYGZNunCvGoaYflky99X4ZlgZOQQd8nGC6xWk0uwZJhkvwPLesK1k`,
      },
    });
    const result = await res.json();

    setTracks(result.tracks);
  };

  useEffect(() => {
    trending();
    Tracks();
  }, []);
  return (
    <>
      {/* <LoginScreen /> */}
      {/* <SignUpScreen /> */}
      <View
        style={{
          flex: 1,
        }}>
        <LinearGradient
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
          colors={['#c31432', '#240b36']}>
          <View
            style={{
              alignItems: 'center',
              marginLeft: 15,
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 24, color: 'white'}}>Goofy</Text>
            <Text style={{fontSize: 18, color: '#ECF0F1'}}>
              Have Fun Listening
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 18, color: '#ECF0F1'}}>Setting</Text>
          </View>
        </LinearGradient>
        <LinearGradient
          style={{flex: 4}}
          colors={['#0f0c29', 'black', 'black']}>
          <TrendingNow result={trendingResult} />

          <TracksList result={tracks} />
        </LinearGradient>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default Home;
