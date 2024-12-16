import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import { useState } from "react";

import PrimaryButton from "../components/ui/PrimaryButton";
import GameScreen from "./GameScreen";

import colors from "../constants/colors";
import Title from "../components/ui/Title";

function StartGameScreen({onPickedNumber})
{
    const [enteredNumber, setEnteredNumber] = useState('');

    function setNumberHandler(enteredText)
    {
        setEnteredNumber(enteredText);
        // console.log("type of input is ", typeof(enteredNumber))
        // console.log("number is ", enteredNumber);
    }

    function resetInput()
    {
        setEnteredNumber('');
    }

    function confirmInputHandler()
    {
        const chosenNumber = parseInt(enteredNumber);

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99)
        {
            console.log("invalid number");
            Alert.alert("Invalid Number!",
                        "Number has to be between 1 and 99.",
                        [{text: 'Okay', style: 'destructive', onPress:resetInput}]);
            return;
        }
        
        console.log("valid Number");
        onPickedNumber(chosenNumber);
    }

    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <View style={styles.inputContainer}>
                <Text style={styles.textContainer}>Enter a Number</Text>
                <TextInput style={styles.numberInput}
                        maxLength={2}
                        keyboardType='number-pad'
                        onChangeText={setNumberHandler}
                        value={enteredNumber}
                        />

                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        marginTop:100,
        alignItems: 'center'
    },

    inputContainer:{
        marginTop:100,
        padding:16,
        backgroundColor: colors.primary800,
        borderRadius: 8,
        marginHorizontal: 24,
        elevation: 20,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2}, 
        shadowRadius: 6,
        shadowOpacity: 0.25,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    numberInput:{
        height: 60,
        width: 50,
        fontSize: 32,
        borderBottomWidth: 2,
        borderBottomColor: colors.accent500,
        color: colors.accent500,
        fontWeight: 'bold',
        marginVertical: 8,
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 8
    },

    buttonContainer:{
        flex:1
    },

    textContainer:{
        fontSize: 16,
        color: colors.accent500
    }
});