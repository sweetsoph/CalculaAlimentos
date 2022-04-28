import { React, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import CalculaRefri from './components/CalculaRefri';

export default function App() {
  const[qtConvidados, setQtConvidados] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Quantidade de Alimentos para uma Festa!</Text>
      <TextInput 
            style={styles.input}
            keyboardType="numeric"
            value={qtConvidados}
            onChangeText={(texto)=>setQtConvidados(texto)}
          />
          <CalculaRefri qtConvidados={qtConvidados}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center'
  },
  titulo:{
    fontSize: 35,
    color: '#FFF',
    backgroundColor:'#9DD5FA',
    width: '100%',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    fontFamily: 'fantasy'
  },
  input:{
    borderColor:'#000',
    borderWidth:2,
    fontSize:30,
    width:'80%'
  },
});
