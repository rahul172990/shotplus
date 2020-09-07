import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Animated,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {ManImage} from '../images/image';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

const LoginScreen = (props) => {
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo.user.email);

      props.navigation.navigate('root', {data: 'rahul'});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('user canelled');
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('in progress');
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('unavailable');
        // play services not available or outdated
      } else {
        console.log(error);
        // some other error happened
      }
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '655533992664-li6ri2u4ovom9astt3vr29ot9od3b41c.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true,
    });
  }, []);

  const state = {
    animation: new Animated.Value(0),
  };

  const [pass, setPass] = useState(true);

  const heightStyle = {
    marginTop: state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [-15, 0],
    }),
    paddingBottom: state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [15, 0],
    }),
  };

  const inner = {
    borderRadius: state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [12, 16],
    }),
  };

  const handleButtonUp = () => {
    Animated.timing(state.animation, {
      toValue: 0,
      duration: 50,
      useNativeDriver: false,
    }).start();
  };

  const handleAirhorn = () => {
    Animated.timing(state.animation, {
      toValue: 1,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };
  return (
    <LinearGradient style={styles.container} colors={['#F2BAE8', '#0C7BB3']}>
      <View style={{alignItems: 'center'}}>
        <Image style={{height: 200, width: 200}} source={ManImage} />
      </View>

      <View style={styles.root}>
        <TextInput
          style={{...styles.input, paddingHorizontal: 20}}
          placeholder="email"
          placeholderTextColor="#ECF0F1"
        />
        <View style={styles.row}>
          <TextInput
            placeholder="password"
            style={styles.input2}
            placeholderTextColor="#ECF0F1"
            secureTextEntry={pass}
          />
          <TouchableOpacity
            onPress={() => {
              setPass(!pass);
            }}>
            <Icon
              name={pass ? 'eye-outline' : 'eye-off-outline'}
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 30}}>
          <TouchableWithoutFeedback
            onPress={handleAirhorn}
            onPressOut={handleButtonUp}>
            <View style={styles.button}>
              <View style={styles.outer}>
                <Animated.View style={[styles.height, heightStyle]}>
                  <Animated.View style={[styles.inner, inner]}>
                    <Text style={styles.white}>Log in</Text>
                  </Animated.View>
                </Animated.View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Text style={{color: '#ECF0F1'}}>
          Don't have an account ?
          <Text
            onPress={() => {
              props.navigation.navigate('signup');
            }}
            style={{color: 'white', marginLeft: 10}}>
            Create one
          </Text>
        </Text>
        <GoogleSigninButton
          style={{width: 192, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={signIn}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  root: {
    marginTop: '20%',
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: '90%',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 40,
    color: 'white',
    fontSize: 16,
    textAlign: 'left',
  },
  row: {
    height: 50,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    borderColor: 'white',
    borderRadius: 40,
    borderWidth: 1,
  },
  input2: {
    height: 50,
    width: '85%',
    color: 'white',
    fontSize: 16,
  },
  button: {
    height: 70,
    width: 200,
  },
  outer: {
    flex: 1,
    padding: 10,
    borderRadius: 14,
  },
  height: {
    backgroundColor: 'rgba(6,99,201,0.53)',
    borderRadius: 16,
  },
  inner: {
    height: '100%',
    backgroundColor: '#3498DB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  white: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default LoginScreen;
