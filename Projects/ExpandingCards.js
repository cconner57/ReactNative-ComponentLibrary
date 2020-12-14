import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	TouchableOpacity,
} from 'react-native';

const ExpandingCards = () => {
	const [active, setActive] = useState('');

	return (
		<View style={styles.container}>
			<View style={styles.bodyContainer}>
				<View
					style={[styles.imageContainer, active === 'Pic 1' && { flex: 10 }]}>
					<TouchableOpacity
						onPress={() => {
							setActive('Pic 1');
						}}>
						<ImageBackground
							source={require('../assets/ExpandingCards/pic1.jpg')}
							style={styles.image}>
							{active === 'Pic 1' && (
								<Text style={styles.imageText}>River</Text>
							)}
						</ImageBackground>
					</TouchableOpacity>
				</View>
				<View
					style={[styles.imageContainer, active === 'Pic 2' && { flex: 10 }]}>
					<TouchableOpacity
						onPress={() => {
							setActive('Pic 2');
						}}>
						<ImageBackground
							source={require('../assets/ExpandingCards/pic2.jpg')}
							style={styles.image}>
							{active === 'Pic 2' && (
								<Text style={styles.imageText}>Forest</Text>
							)}
						</ImageBackground>
					</TouchableOpacity>
				</View>
				<View
					style={[styles.imageContainer, active === 'Pic 3' && { flex: 10 }]}>
					<TouchableOpacity
						onPress={() => {
							setActive('Pic 3');
						}}>
						<ImageBackground
							source={require('../assets/ExpandingCards/pic3.jpg')}
							style={styles.image}>
							{active === 'Pic 3' && (
								<Text style={styles.imageText}>Flower</Text>
							)}
						</ImageBackground>
					</TouchableOpacity>
				</View>
				<View
					style={[styles.imageContainer, active === 'Pic 4' && { flex: 10 }]}>
					<TouchableOpacity
						onPress={() => {
							setActive('Pic 4');
						}}>
						<ImageBackground
							source={require('../assets/ExpandingCards/pic4.jpg')}
							style={styles.image}>
							{active === 'Pic 4' && (
								<Text style={styles.imageText}>Mountain</Text>
							)}
						</ImageBackground>
					</TouchableOpacity>
				</View>
				<View
					style={[styles.imageContainer, active === 'Pic 5' && { flex: 10 }]}>
					<TouchableOpacity
						onPress={() => {
							setActive('Pic 5');
						}}>
						<ImageBackground
							source={require('../assets/ExpandingCards/pic5.jpg')}
							style={styles.image}>
							{active === 'Pic 5' && <Text style={styles.imageText}>Road</Text>}
						</ImageBackground>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
	},
	bodyContainer: {
		flex: 1,
		flexDirection: 'row',
		marginTop: 20
	},
	imageContainer: {
		flex: 1,
		height: '95%',
		marginHorizontal: 8,
		borderRadius: 50,
		overflow: 'hidden',
	},
	image: {
		height: '100%',
		alignItems: 'center',
		flexDirection: 'column-reverse',
	},
	imageText: {
		fontSize: 18,
		marginBottom: 20,
		padding: 5,
		color: 'white',
	},
});

export default ExpandingCards;
