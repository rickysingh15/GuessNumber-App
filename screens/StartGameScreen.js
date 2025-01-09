import { TextInput,
         View,
         StyleSheet,
         Alert,
         Text,
         useWindowDimensions,
         KeyboardAvoidingView,
         ScrollView } from "react-native";

import { useState } from "react";

import PrimaryButton from "../components/ui/PrimaryButton";
import GameScreen from "./GameScreen";

import colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({onPickedNumber})
{
    const [enteredNumber, setEnteredNumber] = useState('');
    const {width, height} = useWindowDimensions();
    // will change whenever the decice's orientation changes.

    function setNumberHandler(enteredText)
    {
        setEnteredNumber(enteredText);
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

    const marginTopDistance = height < 380 ? 30 : 100
    // as the orientation changes this will get updated

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior="position">
                <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
                    <Title>Guess My Number</Title>
                    <Card>
                        <InstructionText>Enter a Number</InstructionText>
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
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    screen:{
        flex:1
    },

    rootContainer:{
        flex:1,
        marginTop:100,
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