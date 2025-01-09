import { Text,
         View,
         StyleSheet,
         Image,
         Dimensions,
         useWindowDimensions,
         ScrollView } from "react-native";

import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import colors from "../constants/colors";
import InstructionText from "../components/ui/InstructionText";

function GameOverScreen({onGameOver, numTries, pickedNumber})
{
    const {width, height} = useWindowDimensions();

    let imageSize = 300;

    if(width < 380 || height < 380)
    {
        imageSize = 150;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    };

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.rootContainer}>
                <View>
                    <Title>Game Over</Title>
                </View>
                <View style={[styles.imageContainer, imageStyle]}>
                    <Image style={styles.image} source={require('../assets/images/success.png')}/>
                </View>
                <InstructionText style={styles.instructionText}>Your phone needed <Text style={styles.valueContainer}>{numTries}</Text> number of tries to guess number <Text style={styles.valueContainer}>{pickedNumber}</Text></InstructionText>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={onGameOver}>Restart</PrimaryButton>
                </View>
            </View>
        </ScrollView>
    );
}

export default GameOverScreen;

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({

    screen:{
        flex:1
    },
    rootContainer:{
        // flex1 so that it takes up the whole screen
        flex:1,   
        padding:24,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonContainer:{
        margin:16,
        padding:8
    },

    imageContainer:{
        // width: deviceWidth < 380 ? 150 : 300,
        // height: deviceWidth < 380 ? 150 : 300,
        // borderRadius:deviceWidth < 380 ? 75 : 150,
        borderWidth: 3,
        borderColor: colors.primary800,
        overflow: 'hidden',
        margin: 36
    },

    image:{
        width: '100%',
        height: '100%'
    },

    instructionText:{
        color: "black",
        fontFamily: 'open-sans-bold',
        textAlign: 'center'
    },

    valueContainer:{
        color: colors.primary500
    }
});