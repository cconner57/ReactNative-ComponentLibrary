import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

const SoundBoard = () => {
	const [noise, setNoise] = useState(null);

	const playSound = async (mp3) => {
		const { sound } = await Audio.Sound.createAsync(mp3);
		if (noise) {
			noise.stopAsync();
		}
		setNoise(sound);
		await sound.playAsync();
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.button}
				onPress={() => playSound(require('../assets/SoundBoard/applause.mp3'))}>
				<Text style={styles.text}>Applause</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() =>
					playSound(require('../assets/SoundBoard/babblingbrook.mp3'))
				}>
				<Text style={styles.text}>Babbling Brook</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => playSound(require('../assets/SoundBoard/boo.mp3'))}>
				<Text style={styles.text}>Boo</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => playSound(require('../assets/SoundBoard/cat.mp3'))}>
				<Text style={styles.text}>Cat</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => playSound(require('../assets/SoundBoard/cow.mp3'))}>
				<Text style={styles.text}>Cow</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => playSound(require('../assets/SoundBoard/dog.mp3'))}>
				<Text style={styles.text}>Dog</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => playSound(require('../assets/SoundBoard/gasp.mp3'))}>
				<Text style={styles.text}>Gasp</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => playSound(require('../assets/SoundBoard/geese.mp3'))}>
				<Text style={styles.text}>Geese</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => playSound(require('../assets/SoundBoard/jungle.mp3'))}>
				<Text style={styles.text}>Jungle</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => playSound(require('../assets/SoundBoard/river.mp3'))}>
				<Text style={styles.text}>River</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => playSound(require('../assets/SoundBoard/tada.mp3'))}>
				<Text style={styles.text}>Tada</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => playSound(require('../assets/SoundBoard/victory.mp3'))}>
				<Text style={styles.text}>Victory</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() =>
					playSound(require('../assets/SoundBoard/whitenoise.mp3'))
				}>
				<Text style={styles.text}>White Noise</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => playSound(require('../assets/SoundBoard/wrong.mp3'))}>
				<Text style={styles.text}>Wrong</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 25,
		backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
		flexWrap: 'wrap',
	},
	button: {
		width: '40%',
		marginVertical: 10,
		marginHorizontal: 10,
		paddingVertical: 15,
		paddingHorizontal: 20,
		borderRadius: 7,
		backgroundColor: 'hsl(205, 75%, 60%)',
	},
	text: {
		fontWeight: 'bold',
		fontSize: 18,
		fontFamily: 'roboto',
		textAlign: 'center',
		color: 'hsl(0, 100%, 100%)',
	},
});

export default SoundBoard;
