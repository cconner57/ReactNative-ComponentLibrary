import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const projects = [
	{
		name: 'Expanding Cards',
		image: require('../assets/ExpandingCards/ExpandingCards.jpeg'),
	},
	{
		name: 'Progress Steps',
		image: require('../assets/ProgressSteps/ProgressSteps.jpeg'),
	},
	{
		name: 'Search Widget',
		image: require('../assets/HiddenSearch/HiddenSearch.jpeg'),
	},
	{
		name: 'Blurry Image',
		image: require('../assets/BlurryImage/BlurryImage.jpeg'),
	},
	{
		name: 'Sound Board',
		image: require('../assets/SoundBoard/SoundBoard.jpeg'),
	},
	{
		name: 'Dad Jokes',
		image: require('../assets/DadJokes/DadJokes.png'),
	},
];

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.Container}>
			{projects.map((project, index) => (
				<TouchableOpacity
					key={index}
					style={styles.Project}
					onPress={() => navigation.navigate(project.name)}>
					<View style={styles.TitleContainer}>
						<Text style={styles.Title}>{project.name}</Text>
					</View>
					<View style={styles.ImageContainer}>
						<Image source={project.image} style={styles.Image} />
					</View>
				</TouchableOpacity>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	Container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		flexWrap: 'wrap',
		backgroundColor: '#fff',
	},
	Project: {
		width: '35%',
		alignItems: 'center',
		marginVertical: 20,
		backgroundColor: '#fff',
		borderRadius: 7,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 15.0,
	},
	TitleContainer: {
		paddingVertical: 10,
	},
	Title: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	ImageContainer: {
		paddingBottom: 10,
	},
	Image: {
		height: 180,
		width: 100,
		borderRadius: 7,
	},
});

export default HomeScreen;
