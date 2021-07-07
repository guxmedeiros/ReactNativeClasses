import React from 'react';
import {View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.box1}></View>
        <View style={styles.box1}></View>
        <View style={styles.box1}></View>
      </View>

      <View style={styles.container2}>
        <View style={styles.box2}></View>
        <View style={styles.box2}></View>
        <View style={styles.box2}></View>
      </View>
     
      <View style={styles.container2}>
        <View style={styles.box3}></View>
        <View style={styles.box3}></View>
        <View style={styles.box3}></View>
      </View>

      <View style={styles.container2}>
        <View style={styles.box4}></View>
        <View style={styles.box4}></View>
        <View style={styles.box4}></View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  box1: {
    width: 116,
    height: 116,
    backgroundColor: '#50E3C2',
  },
  box2: {
    width: 116,
    height: 116,
    backgroundColor: '#4A90E2',
  },
  box3: {
    width: 116,
    height: 116,
    backgroundColor: '#9013FE',
  },
  box4: {
    width: 116,
    height: 116,
    backgroundColor: '#F5A623',
  },
})

export default App;

