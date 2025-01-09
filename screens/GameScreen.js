import { StyleSheet,
         Text,
         View,
         TextInput,
         Alert,
         FlatList,
         useWindowDimensions} from "react-native";

import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';

import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import { useEffect } from "react";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import LogItem from "../components/game/LogItem";

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

function GameScreen({userNumber, onGameOver, TriesHandler})
{   
    const initialGuess = generateRandomNumber(1,100,userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [logs, setLogs] = useState([]);
    const {width, height} = useWindowDimensions();

    useEffect(() => {
        if(currentGuess == userNumber)
        {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minNum = 1;
        maxNum = 100;
    }, [])

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
        TriesHandler();
        addLogHandler(currentGuess);

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

    function addLogHandler(newNumber)
    {
        setLogs((prevLogs) => [
        {
            number: newNumber, id: Math.random().toString()
        }, ...prevLogs]);
    }

    let content = (
        <>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.InstructionText}>Give Direction</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View>  
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="remove" size={24} color="white"/>
                        </PrimaryButton>
                    </View>
                    <View>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
                            <Ionicons name="add" size={24} color="white"/>
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </>
    );

    if(width > 500)
    {
        content = (
            <>
                <View style={styles.buttonsContainerWide}>
                    <View>  
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="remove" size={24} color="white"/>
                        </PrimaryButton>
                    </View>
                    <NumberContainer>{currentGuess}</NumberContainer>
                    <View>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
                            <Ionicons name="add" size={24} color="white"/>
                        </PrimaryButton>
                    </View>
                </View>
            </>
        );
    }


    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {content}
            <View style={styles.listContainer}>
                <FlatList
                    data={logs}
                    renderItem={(itemData) => {

                        return (
                            <LogItem number={itemData.item.number}/>
                        );
                    }}
                    keyExtractor={(item) => {return item.id}}
                    alwaysBounceVertical={false}
                />
            </View>
        </View>       

    );
}

export default GameScreen;

const styles = StyleSheet.create({

    screen:{
        flex:1,
        padding: 24,
        alignItems: 'center'
    },
    buttonsContainer:{
        flexDirection: 'row'
    },

    buttonsContainerWide:{
        flexDirection: 'row',
        alignItems: 'center'
    },

    InstructionText: {
        marginBottom: 20
    },

    listContainer:{
        flex:1,
        padding:16
    }

});