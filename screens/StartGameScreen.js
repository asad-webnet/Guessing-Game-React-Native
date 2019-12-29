import React, {useState , useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input'
import BodyText from '../components/BodyText'
import Colors from '../constants/colors'
import NumberContainer from '../components/NumberContainer'
import TitleText from '../components/TitleText'
import MainButton from '../components/MainButton'

const StartGameScreen = props => {

    const [enteredValue,
        setEnteredValue] = useState('');
    const [confirmed,
        setConfirmed] = useState(false);
    const [selectedNumber,
        setSelectedNumber] = useState();
    const [buttonWidth,
        setButtonWidth] = useState(Dimensions.get('window').width / 4);





    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    useEffect(()=> {
        const updateLayout = () => {
            setButtonWidth(Dimensions.get('window').width / 4);
        }
        Dimensions.addEventListener('change',updateLayout);

        return () => {
            Dimensions.removeEventListener('change',updateLayout);
        }

    })

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number', 'It should be between 1-99', [
                {
                    text: 'Okay',
                    style: 'destructive',
                    onPress: resetInputHandler
                }
            ])
            return;
        }

        setConfirmed(true);
        setEnteredValue('');
        setSelectedNumber(chosenNumber);
        Keyboard.dismiss();
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text>You selected {selectedNumber}</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                {/* <Button title="START GAME" onPress={() => props.onStartGame(selectedNumber)}/> */}
                <MainButton onPress={() => props.onStartGame(selectedNumber)}>START GAME</MainButton>
            </Card>
        )
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={styles.screen}>
                        <TitleText style={styles.title}>Start a New Game</TitleText>
                        <Card style={styles.inputContainer}>
                            <BodyText style={styles.text}>Select a Number</BodyText>
                            <Input
                                style={styles.input}
                                blurOnSubmit
                                autoCapitalize='none'
                                autoCorrect={false}
                                keyboardType="number-pad"
                                maxLength={2}
                                onChangeText={numberInputHandler}
                                value={enteredValue}/>

                            <View style={styles.buttonContainer}>
                                <View style={{width : buttonWidth}}>
                                    <Button title="Reset" onPress={resetInputHandler} color={Colors.accent}/>
                                </View>
                                <View style={{width :buttonWidth}}>
                                    <Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary}/>
                                </View>
                            </View>
                        </Card>
                        {confirmedOutput}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    inputContainer: {
        width: 300,
        maxWidth: '90%',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    // button: {
    //     // width: 95,
    //     width: Dimensions
    //         .get("window")
    //         .width / 4
    // },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    },
    text: {
        fontFamily: 'open-sans'
    }

});

export default StartGameScreen;