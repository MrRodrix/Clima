import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useEffect, useState} from "react";


export default function App() {
  const [text, setText] = useState('');
  const [weather, setWeather] = useState(null);

  function getWeather() {
    // get value from input
    // fetch weather from api
    // update state

    //clean text unicode
    const cleanText = text.replace(/ /g, '%20');
    fetch(`https://weather.contrateumdev.com.br/api/weather/city/?city=${cleanText}`)
        .then(response => response.json())
        .then(data => setWeather(data));
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Digite a cidade: " onChangeText={(text)=>setText(text)} />
      <Button title={"Pesquisar"} onPress={getWeather}/>
      <Text style={styles.text}>{weather ? weather.main.temp + '\n' +  weather.weather[0].description: 'Error'}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  text: {
    fontSize: 20,
      // align the text in the center
        textAlign: 'center',
        // give a bit of margin on the top and bottom of the text
        marginTop: 50,
        marginBottom: 50,


  }
});
