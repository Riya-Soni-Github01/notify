import React, { Fragment } from 'react';
import PushController from './PushController';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, FlatList } from 'react-native';

const App = () => {
  return (
    <View>
      <Text>Modified</Text>
      <Text>Hello</Text>
      <PushController />
    </View>
  );
};
export default App;
