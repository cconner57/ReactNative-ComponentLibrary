import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const HiddenSearchWidget = (props) => {
	const [toggle, setToggle] = useState(false);
	const [search, setSearch] = useState('');

	const showSearch = () => {
		setToggle((show) => !show);
	};

	const searchInputHandler = () => {
		props.func(search)
		setSearch('')
	}

	return (
		<View style={[styles.Container, toggle ? { width: 190 } : { width: 80 }]}>
			{toggle && (
				<View style={styles.InputContainer}>
					<TextInput style={styles.Input} 
						placeholder='Search...' 
						autoCapitalize="none" 
						autoCorrect='false'
						onChangeText={text => setSearch(text)} 
						onSubmitEditing={searchInputHandler} 
						value={search}/>
				</View>
			)}
			<TouchableOpacity style={styles.IconContainer} onPress={showSearch}>
				<AntDesign name='search1' size={26} color='hsl(205, 60%, 50%)' />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	Container: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 15,
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderRadius: 7,
		borderWidth: 3,
		borderColor: 'hsl(205, 70%, 70%)',
		backgroundColor: 'hsl(0, 0%, 100%)',
	},
	InputContainer: {
		flex: 1,
		marginLeft: 20,
	},
	Input: {
		fontSize: 22,
	},
	IconContainer: {
		marginHorizontal: 15,
	},
});

export default HiddenSearchWidget;
