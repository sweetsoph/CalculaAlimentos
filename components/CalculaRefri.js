import React from "react";
import {StyleSheet, Text} from "react-native";

export default function CalculaRefri(props){
    let texto = [];
    if(props.qtConvidados != ""){
        if((props.qtConvidados * 600) > 1000){
            texto.push(
                <Text style={styles.texto}>
                    Quantidade de Refrigerante: {(props.qtConvidados * 600)/1000}L
                </Text>
                );
        }
        else{
            texto.push(
                <Text style={styles.texto}>
                    Quantidade de Refrigerante: {props.qtConvidados * 600}mL
                </Text>
                );
        }
        
    }
    else{
        texto.push(
            <Text></Text>
        );
    }
    return(
        <>
            {texto} 
        </>
    );
}

const styles = StyleSheet.create({
    texto:{
        fontSize:30
    }
});