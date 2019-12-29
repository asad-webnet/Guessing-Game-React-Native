import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';

import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import Colors from '../constants/colors'
import MainButton from '../components/MainButton'

const GameOverScreen = props => {
    return <ScrollView>
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    resizeMode="cover"
                    source={require('../assets/success.png')}
                    style={styles.image}/>
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>Your phone needed
                    <Text style={styles.highlighedText}>{props.roundsNumber}</Text>
                    rounds to guess the number :<Text style={styles.highlighedText}>
                        {props.userNumber}</Text>
                </BodyText>
            </View>

            <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        borderRadius: Dimensions
            .get('window')
            .width * 0.7 / 2,
        borderWidth: 3,
        borderColor: 'black',
        width: Dimensions
            .get('window')
            .width * 0.7,
        height: Dimensions
            .get('window')
            .width * 0.7,
        overflow: 'hidden',
        marginVertical: Dimensions
            .get('window')
            .height * 0.7 / 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
    highlighedText: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: Dimensions
            .get('window')
            .height * 0.7 / 60
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions
            .get('window')
            .height < 400
            ? 16
            : 18
    }
})

export default GameOverScreen;