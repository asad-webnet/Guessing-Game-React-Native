import React, {useState,useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Font from 'expo-font'
import {AppLoading} from 'expo'

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

const fetchFonts = () => {
    return Font.loadAsync()
}

export default function App() {

    const [userNumber,
        setUserNumber] = useState();
    const [guessRounds,
        setGuessRounds] = useState(0);
    const [fontLoaded,
        setFontLoaded] = useState(false);


    async function loadMyFonts() {
      const fonts = await Font.loadAsync({'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'), 'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')});
      setFontLoaded(true);
      return fonts;
    }

    if (!fontLoaded) {
        return (<AppLoading startAsync={loadMyFonts} onError={() => console.log(err)} onFinish={() => setFontLoaded(true)}/>);
    }

    const configureNewGameHandler = () => {
        setGuessRounds(0);
        setUserNumber(null);
    }

    const startGameHandler = (selectedNumber) => {
        setUserNumber(selectedNumber);
        setGuessRounds(0);
    };

    const gameOverHandler = numOfRounds => {
        setGuessRounds(numOfRounds);
    }

    let content = <StartGameScreen onStartGame={startGameHandler} onGameOver={gameOverHandler}/>;

    if (userNumber && guessRounds <= 0) {
        content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
    } else if (guessRounds > 0) {
        content = <GameOverScreen
            roundsNumber={guessRounds}
            userNumber={userNumber}
            onRestart={configureNewGameHandler}/>;
    }

    return (
        <View style={styles.screen}>
            <Header title="Guessing App"/> 
            {content}
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});
