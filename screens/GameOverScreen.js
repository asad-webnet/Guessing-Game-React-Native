import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import Colors from '../constants/colors'
import MainButton from '../components/MainButton'

const GameOverScreen = props => {
    return <View style={styles.screen}>
        <TitleText>The Game is Over!</TitleText>
        <View style={styles.imageContainer}>
            <Image
                resizeMode="cover"
                source={require('../assets/success.png')}
                style={styles.image}/>
        </View>
        <View style={styles.resultContainer}>
            <BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlighedText}>{props.roundsNumber}</Text> rounds to guess the number :<Text style={styles.highlighedText}>
                    {props.userNumber}</Text>
            </BodyText>
        </View>

        <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        width: 300,
        height: 300,
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
    highlighedText: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    },
    resultContainer : {
        marginHorizontal : 30,
        marginVertical : 5
    },
    resultText : {
        textAlign : 'center',
        fontSize : 20    
    }
})

export default GameOverScreen;