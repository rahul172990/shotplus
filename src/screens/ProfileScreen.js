import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  PermissionsAndroid,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const ProfileScreen = ({route, navigation}) => {
  const [image, setImage] = useState(null);
  console.log(route);

  let options = {
    title: 'Select Image',
    customButtons: [
      {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const launchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log('response', JSON.stringify(response));
        setImage(source);
      }
    });
  };

  return (
    <View style={styles.root}>
      <View style={styles.im}>
        <Image source={image} style={styles.pic} />
      </View>
      <View style={styles.info}>
        <Text style={{color: 'white', fontSize: 18}}>hsjh</Text>
        <Button title="permission" onPress={requestCameraPermission} />
        <Button title="camera" onPress={launchImageLibrary} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'black',
  },
  im: {
    flex: 1,
  },
  info: {
    flex: 1,
  },
  pic: {
    height: 150,
    width: 150,
    borderRadius: 75,
    borderColor: 'royalblue',
    borderWidth: 0.75,
  },
});

export default ProfileScreen;
