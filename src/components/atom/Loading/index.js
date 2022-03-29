import React from 'react';
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';


const Loading = () => {
  return (
    <View style={styles.wrapper}>
      <StatusBar hidden={true} backgroundColor="white" />
      <ActivityIndicator size="large" color="green" />
      <Text style={styles.text}>Loading</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
});
