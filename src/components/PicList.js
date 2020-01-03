import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Image, Alert } from "react-native";
import pictu from "./pics";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
// import { Container } from './styles';

export default function PicList() {
  const [pics, setPics] = useState([]);
  const [loved, setLoved] = useState([]);

  useEffect(() => {
    async function LoadPic() {
      const fotos = pictu;
      setPics(fotos);
    }
    LoadPic();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Momentos</Text>
      <FlatList
        style={styles.list}
        data={pics}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.picList}>
            <Image style={styles.pic} source={{ uri: item.pic.url }}></Image>
            <Text style={styles.desc}>Amei esse</Text>

            <Text style={styles.desc}>Amo cada momento</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                if (loved === true) {
                  setLoved(false);
                } else {
                  setLoved(true);
                }
              }}
            >
              {loved === true ? (
                <Ionicons name="ios-heart-empty" size={48} color="black" />
              ) : (
                <Ionicons name="ios-heart" size={48} color="red" />
              )}
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.second}>
        <Text style={styles.letter}>Oii</Text>
        <Text style={styles.letter}>
          é só pra você lembrar dos nossos momentos , quando se sentir triste{" "}
        </Text>
        <Text style={styles.letter}>
          Não que vá tirar toda a sua tristeza , mas pelo menos te lembrar que
          vc não tá sozinha
        </Text>
        <Text style={styles.letter}>
          eu amo você
          <Text style={styles.ps}>(demais demais mesmo)</Text>
        </Text>
        <Text style={styles.letter}>espero que tenha ajudado chuchu</Text>
        <TouchableOpacity
          style={styles.last}
          onPress={() => {
            Alert.alert("Linda", "Maravilhosa,Mulherão da Porra  ", [
              {
                text: "Concordo",
                onPress: () => console.log("Inicie um novo jogo")
              }
            ]);
          }}
        >
          <Ionicons name="ios-heart" size={48} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30
  },
  title: {
    paddingHorizontal: 20,
    marginBottom: 15,
    fontSize: 20,
    color: "#444"
  },
  pic: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    borderRadius: 2
  },
  desc: {
    fontSize: 15,
    color: "#999",
    marginTop: 5
  },
  second: {
    marginTop: 20,
    flex: 1
  },
  letter: {
    fontWeight: "bold",
    marginTop: 10
  },
  picList: {
    marginRight: 20
  },
  list: {
    paddingHorizontal: 20
  },
  ps: {
    color: "#999"
  },
  last: {
    alignItems: "center"
  }
});
