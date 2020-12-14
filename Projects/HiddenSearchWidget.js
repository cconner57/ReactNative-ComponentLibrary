import React from 'react';
import { View, StyleSheet } from 'react-native';
import Search from '../Components/Search'

const HiddenSearchWidget = () => {
	return (
		<View style={styles.Container}>
			<Search />
		</View>
	);
};

const styles = StyleSheet.create({
	Container: {
		height: '100%',
		paddingTop: 50,
		alignItems: 'center',
		backgroundColor: 'hsl(0, 0%, 100%)',
	},
});

export default HiddenSearchWidget;
