import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Colors from '../constants/colors'

const MainButton = props => {
    return <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    button : {
        backgroundColor : Colors.primary,
        paddingHorizontal : 30,
        paddingVertical : 12,
        borderRadius : 25        
    },
    buttonText : {
        color : 'white',
        fontFamily : 'open-sans',
        fontSize : 18
    }
});

export default MainButton;