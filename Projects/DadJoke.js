import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native';
import Search from '../Components/Search';
import Button from '../Components/Button';

const DadJoke = () => {
	const [joke, setJoke] = useState('');

	useEffect(() => {
		fetchJoke();
	}, []);

	const fetchJoke = async (term = undefined) => {
        let response;
		const utility = {
			headers: {
				Accept: 'application/json',
			},
		};
		if (term) {
			response = await fetch(
				`https://icanhazdadjoke.com/search?term=${term}`,
				utility
			);
		} else {
			response = await fetch('https://icanhazdadjoke.com/', utility);
		}
		let data = await response.json();
        term ? setJoke(data.results[0].joke) : setJoke(data.joke);
	};

	return (
            <View style={styles.container}>
                <View style={styles.jokeContainer}>
                    <ImageBackground
                        style={styles.imageContainer}
                        blurRadius={50}
                        source={require('../assets/DadJokes/jokesBG.jpg')}>
                        <Search func={fetchJoke}/>
                        <Text style={styles.content}>{joke}</Text>
                        <Button style={styles.button} func={() => fetchJoke()}>New Joke</Button>
                    </ImageBackground>
                </View>
            </View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 25,
		backgroundColor: '#fff',
		alignItems: 'center',
		fontFamily: 'roboto',
	},
	jokeContainer: {
		borderRadius: 10,
		borderWidth: 1,
		width: '80%',
		height: '60%',
		overflow: 'hidden',
	},
	imageContainer: {
		width: '100%',
		height: '100%',
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	title: {
		fontSize: 30,
		fontFamily: 'roboto-bold',
		fontWeight: 'bold',
		textAlign: 'center',
		color: 'white',
	},
	content: {
		marginTop: 20,
		paddingHorizontal: 30,
		fontSize: 24,
		fontFamily: 'roboto',
		height: 170,
		color: 'white',
		textAlign: 'center',
	},
    button: {
        marginBottom: 20
    }
});

export default DadJoke;
