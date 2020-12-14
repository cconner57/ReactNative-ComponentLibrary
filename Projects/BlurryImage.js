import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const BlurryImage = () => {
	const [blurNum, setBlurNum] = useState(100);

	useEffect(() => {
		blurNum > 0 && setTimeout(() => setBlurNum(blurNum - 1), 40)
	}, [blurNum]);

	return (
		<View>
			<Image
				style={styles.Image}
				blurRadius={blurNum}
				source={require('../assets/BlurryImage/imageBlur.jpg')}
			/>
			{blurNum > 0 &&<View style={styles.TextContainer}>
				<Text style={styles.Text}>{`${blurNum}%`}</Text>
			</View>}
		</View>
	);
};

const styles = StyleSheet.create({
	Image: {
		height: '100%',
		width: '100%',
	},
	TextContainer: {
		position: 'absolute',
		top: '45%',
		left: '35%',
		padding: 20,
		borderRadius: 10,
		backgroundColor: 'hsla(0, 0%, 0%, .6)',
	},
	Text: {
		fontSize: 40,
		color: 'white',
	},
});

export default BlurryImage;
