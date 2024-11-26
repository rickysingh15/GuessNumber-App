import { StyleSheet, Text, View, TextInput } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function GameScreen({onGameFinished})
{

    function quitToMenuHandler()
    {
        onGameFinished(true);
    }

    return (
        <View>
            <Text style={styles.textContainer}>Game Screen</Text>
            <View style={styles.controlsContainer}>
                <TextInput style={styles.numberInput}
                            maxLength={2}
                            keyboardType='number-pad'
                            />

                <View style={styles.buttonsContainer}>
                    <View>
                        <PrimaryButton>Reset</PrimaryButton>
                    </View>
                    <View>
                        <PrimaryButton onPress={quitToMenuHandler}>Quit</PrimaryButton>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({

    rootContainer:{
        flex:1,
        flexDirection: 'column'
    },

    textContainer:{
        marginTop: 60,
        marginHorizontal: 80,
        fontSize: 32
    },

    controlsContainer:{
        marginTop: 80,
        padding: 16,
        backgroundColor: '#3b021f',
        marginHorizontal: 24,
        borderRadius: 8
    },

    numberInput:{
        height: 40,
        width: '80%',
        marginHorizontal: 20,
        alignSelf: 'center'
    },
    
    buttonsContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

});