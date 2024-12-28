import { StyleSheet, Text, View, TextInput, Alert } from "react-native";
import { useState } from "react";

import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import { useEffect } from "react";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function generateRandomNumber(min,max,exclude)
{   
    console.log("genrateRandom number called for");
    console.log(min, " ", max);

    if(max-min <= 1)
    {
        return min !== exclude ? min: max;
    }

    const rndNum = Math.floor(Math.random()*(max-min))+min;

    if(rndNum==exclude)
    {
        return generateRandomNumber(min,max,exclude);
    }
    else return rndNum;
}

let minNum = 1;
let maxNum = 100;

function GameScreen({userNumber, onGameOver})
{   
    const initialGuess = generateRandomNumber(1,100,userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if(currentGuess == userNumber)
        {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    function nextGuessHandler(direction)
    {
        if((direction == 'lower' && currentGuess < userNumber)
            || (direction == 'higher' && currentGuess > userNumber))
            {
                Alert.alert("Don't lie!","You know that this is wrong...",[{text: 'Okay', style: 'destructive'}]);
                return;
            }
        
        console.log("direction is ", direction)
        console.log(minNum, " ", maxNum);

        // if(currentGuess == userNumber)
        // {   
        //     console.log("Found")
        //     onGameOver(true);
        //     return;
        // }            

        if(direction == 'lower')
        {
            maxNum = currentGuess;
        }
        else if(direction == 'higher')
        {
            minNum = currentGuess+1;
        }


        let nextGuess = generateRandomNumber(minNum,maxNum,currentGuess);
        setCurrentGuess(nextGuess);
    }


    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.InstructionText}>Give Direction</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View>  
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>lower</PrimaryButton>
                    </View>
                    <View>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>Higher</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>       

    );
}

export default GameScreen;

const styles = StyleSheet.create({

    screen:{
        flex:1,
        padding: 24
    },
    buttonsContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    InstructionText: {
        marginBottom: 20
    }

});