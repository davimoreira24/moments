import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert
} from "react-native";
const logo = require("../src/assets/logo.png");
export default function Login({ navigation }) {
  const [nome, setNome] = useState("");
  const [dream, setDream] = useState("");
  async function handleSubmit() {
    if (nome === "Davi" && dream === "layne") {
      navigation.navigate("List");
    } else {
      Alert.alert("Senha errada", "tenta o nome do meu neném", [
        {
          text: "tá bom"
        }
      ]);
    }
  }
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Image source={logo} style={styles.image}></Image>
      <View style={styles.form}>
        <Text style={styles.label}>Digite seu Nome</Text>
        <TextInput
          style={styles.input}
          placeholder={"Seu Nome"}
          autoCapitalize="none"
          autoCorrect={false}
          value={nome}
          onChangeText={setNome}
        />
        <Text style={styles.label}>Digite Sua Senha</Text>
        <TextInput
          style={styles.input}
          placeholder={"Senha"}
          autoCapitalize="words"
          autoCorrect={false}
          value={dream}
          onChangeText={setDream}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>LOGAR</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  form: {
    alignSelf: "stretch",
    paddingHorizontal: 30,
    marginTop: 20
  },
  label: { fontWeight: "bold", color: "#444", marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    height: 44,
    marginBottom: 20,
    borderRadius: 2
  },
  button: {
    height: 42,
    backgroundColor: "#f05a5b",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
  image: {
    height: 80,
    resizeMode: "contain"
  }
});
