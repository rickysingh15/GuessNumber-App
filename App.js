import { StyleSheet, Text, View, Button, TextInput, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {

	const [pickedNumber, setPickedNumber] = useState();
	const [gameFinished, setGameFinished] = useState(false);

    function finishGameHandler(value)
    {
        setGameFinished(value);
    }

	function pickedNumberHandler(inputNumber)
	{
		setPickedNumber(inputNumber);
	}

	let screen = <StartGameScreen onPickedNumber={pickedNumberHandler}/>;
	if(pickedNumber && !gameFinished) screen = <GameScreen onGameFinished={finishGameHandler}/>

	return (
		<LinearGradient colors={["#4e0329", "#ddb52f"]}style={styles.rootScreen}>
			<ImageBackground source={require('./assets/images/background.png')}
							 resizeMode="cover"
							 style={styles.rootScreen}
							 imageStyle={styles.backgroundImage}>
				{screen}
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootScreen:{
		flex:1
	},

	backgroundImage:{
		opacity:0.15
	}
}); 