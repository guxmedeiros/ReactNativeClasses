import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';


const App = () => {
  return (

    <>
    <StatusBar hidden/>
    <View style={styles.container}>

      <View style={styles.container2}>
        <View style={styles.rectangleTop}></View>
      </View>

      <View style={styles.container3}>
        <View style={styles.box}></View>
        <View style={styles.rectangleBox}></View>
      </View>

      <View style={styles.container4}>
        <View style={styles.rectangleLeft}></View>
        <View style={styles.rectangleRight}></View>
      </View>
      
      <View style={styles.rectangleBottom}></View>

      <View style={styles.container5}>
        <View style={styles.row}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
        </View>
        <View style={styles.row}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
        </View>
      </View>

      <View style={styles.footer}></View>
      {/* <View style={styles.container}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View>

      <View style={styles.container}>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
        <View style={styles.box}></View>
      </View>  */}

    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flexDirection: "row",
  },
  container3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  container4: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  container5: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  
  rectangleTop: {
    width: "100%",
    height: 25,
    backgroundColor: '#50E3C2',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#F5A623',
  },
  rectangleBox: {
    width: "35%",
    height: 30,
    backgroundColor: '#F5A623',
  },
  rectangleLeft: {
    width: "50%",
    height: 78,
    backgroundColor: '#9013FE',
  },
  rectangleRight: {
    width: "50%",
    height: 78,
    backgroundColor: '#4A90E2',
  },
  rectangleBottom: {
    height: 13,
    backgroundColor: '#50E3C2',
  },
  footer: {
    height: 60,
    backgroundColor: '#4A90E2',
  },
})

export default App;

