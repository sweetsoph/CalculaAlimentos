import { React, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import CalculaRefri from './components/CalculaRefri';
import CalculaAgua from './components/CalculaAgua';
import CalculaBolo from './components/CalculaBolo';
import CalculaDoces from './components/CalculaDoces';
import CalculaSalgados from './components/CalculaSalgados';

export default function App() {
  const[qtConvidados, setQtConvidados] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.subtitulo}>SophDev</Text>
      <Text style={styles.titulo}>Calculadora de Alimentos para uma festa</Text>

      <Text style={styles.textos}>Insira o número de convidados que estarão presentes na festa no campo abaixo:</Text>
      <TextInput 
            style={styles.input}
            keyboardType="numeric"
            value={qtConvidados}
            onChangeText={(texto)=>setQtConvidados(texto)}
          />
        <View style={styles.containerresultados}>
          <CalculaRefri qtConvidados={qtConvidados}/>
          <CalculaAgua qtConvidados={qtConvidados}/>
          <CalculaBolo qtConvidados={qtConvidados}/>
          <CalculaDoces qtConvidados={qtConvidados}/>
          <CalculaSalgados qtConvidados={qtConvidados}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center'
  },
  subtitulo:{
    fontSize: 30,
    color: '#C4C4C4',
    backgroundColor:'#fff',
    width: '100%',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily: 'sans-serif'
  },
  titulo:{
    fontSize: 35,
    color: '#FFF',
    backgroundColor:'#000B54',
    width: '100%',
    textAlign: 'center',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 20,
    fontFamily: 'fantasy'
  },
  textos:{
    fontSize: 25,
    margin: 20,
  },
  input:{
    borderColor:'#000',
    borderRadius: 30,
    borderWidth:2,
    fontSize:30,
    width:'80%'
  },
  containerresultados:{
    backgroundColor: '#3E498A',
    margin: 20,
    borderRadius: 30,
  }
});
