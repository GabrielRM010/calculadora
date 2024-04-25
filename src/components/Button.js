import React from "react";
import { Dimensions, Stylesheet, Text, TouchableHighlight } from "react-native";

const styles = Stylesheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888888'
        
    }
})