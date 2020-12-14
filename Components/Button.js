import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = (props) => {
	return (
		<TouchableOpacity style={{...styles.button, ...props.style}} onPress={props.func}>
			<Text style={styles.text}>{props.children}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		width: 150,
		margin: 10,
		paddingVertical: 15,
		paddingHorizontal: 20,
        borderRadius: 7,
		backgroundColor: 'hsl(205, 75%, 60%)',
	},
	text: {
		fontWeight: 'bold',
		fontSize: 20,
		fontFamily: 'roboto-bold',
		textAlign: 'center',
		color: 'hsl(0, 100%, 100%)',
	},
});

export default Button;
