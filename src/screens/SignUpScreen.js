import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Animated,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {set} from 'react-native-reanimated';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const pattern = '^(?=.*[A-Z])+(?=.*[a-z])+(?=.*[0-9])+(?=.*[@#$%&])';
  const patternEmail = '[a-zA-Z0-9]+@gmail.com';

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

  const checkPassword = () => {
    if (password.length < 8) {
      setError('password must be 8 character long');
    } else if (!password.match(pattern)) {
      setError('password must contain atleast one special character');
    } else {
      setError('');
    }
  };

  const checkEmail = () => {
    if (!email.match(patternEmail)) {
      setErrorEmail('Invalid Email');
    } else {
      setErrorEmail('');
    }
  };

  return (
    <LinearGradient style={styles.container} colors={['#F2BAE8', '#0C7BB3']}>
      <View style={styles.root}>
        <View
          style={{
            width: '70%',
            marginBottom: 40,
          }}>
          <Text
            style={{
              color: '#FFF',
              fontWeight: 'bold',
              fontSize: 26,
              textAlign: 'center',
            }}>
            We Play The Music. You Enjoy It. Deal?
          </Text>
        </View>
        <View style={styles.row2}>
          <TextInput
            placeholder="First Name"
            style={styles.input3}
            placeholderTextColor="#ECF0F1"
          />
          <TextInput
            placeholder="Last Name"
            style={styles.input3}
            placeholderTextColor="#ECF0F1"
          />
        </View>
        <TextInput
          style={{...styles.input, paddingHorizontal: 20}}
          placeholder="email"
          placeholderTextColor="#ECF0F1"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
          onTextInput={checkEmail}
        />

        <View style={styles.row}>
          <TextInput
            placeholder="password"
            style={styles.input2}
            placeholderTextColor="#ECF0F1"
            secureTextEntry={pass}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
            }}
            onTextInput={checkPassword}
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
        <Text style={{color: '#943126', marginTop: 5}}>
          {error || errorEmail}
        </Text>

        <View style={{marginTop: 30}}>
          <TouchableWithoutFeedback
            onPress={handleAirhorn}
            onPressOut={handleButtonUp}>
            <View style={styles.button}>
              <View style={styles.outer}>
                <Animated.View style={[styles.height, heightStyle]}>
                  <Animated.View style={[styles.inner, inner]}>
                    <Text style={styles.white}>Sign up</Text>
                  </Animated.View>
                </Animated.View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
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
  input3: {
    height: 50,
    width: '45%',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 40,
    color: 'white',
    fontSize: 16,
    textAlign: 'left',
    paddingHorizontal: 20,
  },
  row2: {
    width: '90%',
    height: 50,
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
});

export default SignUpScreen;
