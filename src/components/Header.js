import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Button, Icon} from 'react-native-elements';
import Icons from 'react-native-vector-icons/FontAwesome';

const Header = () => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.row}>
          <View style={styles.icon}>
            <Icons name="home" size={26} />
            <Icon
              style={{marginLeft: 20}}
              name="search"
              type="ionicon"
              size={26}
            />
          </View>
          <Text style={{fontSize: 22, color: 'royalblue', marginRight: 30}}>
            ShotPlus
          </Text>
          <Icon name="menu" type="ionicon" size={26} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    flexDirection: 'row',
  },
});

export default Header;
