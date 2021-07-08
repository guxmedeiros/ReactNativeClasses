import React from 'react';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import Location from 'react-native-vector-icons/Entypo';
import Mail from 'react-native-vector-icons/Feather';

const App = () => {
  return (
    <>
    <StatusBar hidden/>
    <View style={styles.container}>

      <Image style={styles.imagem} source={require('./chill.jpg')}></Image>

      <Text style={styles.profileName}>@guxmedeiros</Text>

      <Text style={styles.aboutMe}>About me:</Text>

      <Text style={styles.textAbout}>22 years old, computer science student, aspiring front-end developer and mechanical keyboards lover. </Text>

      <Text style={styles.city}>
        <Location name="location-pin" size={30} color="white" />
         Teresopolis, RJ
      </Text>

      <Text style={styles.city}>
        <Mail name="mail" size={30} color="white" />
        gustavommoyses@gmail.com
      </Text>
      
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
  },
  imagem: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 50,
    alignSelf: "center",
  },
  profileName: {
    marginTop: 25,
    fontSize: 30,
    alignSelf: "center",
    color: "#fff",
    fontWeight: "700",
  },
  aboutMe: {
    marginTop: 75,
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
  textAbout: {
    marginTop: 10,
    color: "#fff",
    textAlign: "center",
  },
  city: {
    marginTop: 50,
    color: "#fff",
    fontSize: 16,
  },
});

export default App;
