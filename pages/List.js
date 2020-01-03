import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image
} from "react-native";
import PicList from "../src/components/PicList";
// import { Container } from './styles';
import lay from "../src/assets/lay.png";
import { ScrollView } from "react-native-gesture-handler";
export default function List() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={lay} style={styles.logo}></Image>
      <ScrollView>
        <PicList />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  logo: {
    height: 80,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 10
  },
  title: {
    fontWeight: "bold",
    fontSize: 16
  },
  second: {
    marginTop: 20,
    flex: 1
  },
  letter: {
    fontWeight: "bold"
  }
});
