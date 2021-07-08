import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, Switch, Image} from 'react-native';

const CoreComponents = () => {

    //let numero = 100;

    const [numero, setNumero] = useState(0);
    const [on, setOn] = useState(false);
    const [texto, setTexto] = useState('');

    return (

        
        <View style={styles.container}>

            <Image style={styles.imagem} source={require('../src/Images/chill.jpg')} />

            <Text style={styles.texto}>{numero}</Text>

            <TouchableOpacity
                disabled={on === true ? false : true}
                style={styles.botao}
                onPress={() => setNumero(numero+1)}>

                <Text style={styles.textoBotao}>Aumentar</Text>

            </TouchableOpacity>

            <TouchableOpacity
                disabled={on === true ? false : true}
                style={styles.botao}
                onPress={() => setNumero(numero-1)}>

                <Text style={styles.textoBotao}>Diminuir</Text>

            </TouchableOpacity>

            <TouchableOpacity
                disabled={on === true ? false : true} 
                style={styles.botao}
                onPress={() => setNumero(0)}>

                <Text style={styles.textoBotao}>Resetar</Text>

            </TouchableOpacity>

            <Switch value={on} onValueChange={setOn}/>


            {/* <View style={{width: "80%"}}>
                <Button style={styles.botao} title="Aumentar" 
                onPress={() => setNumero(numero+1)}
            />
            </View>
            <View style={{width: "80%"}}>
                <Button style={styles.botao} title="Diminuir" 
                onPress={() => setNumero(numero-1)}
            />
            </View>
            <View style={{width: "80%"}}>
                <Button style={styles.botao} title="Resetar" 
                onPress={() => setNumero(0)}
            />
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    texto: {
      fontSize: 50,
    },
    botao: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '80%',
      height: 50,
      backgroundColor: 'blue',
      marginTop: 30,
    },
    textoBotao: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 22,
      letterSpacing: 5,
    },
    imagem: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
});

export default CoreComponents;