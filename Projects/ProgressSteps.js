import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProgressSteps = () => {
	const [current, setCurrent] = useState(0);

	const nextStep = () => {
		setCurrent((current) => current + 1);
	};
	const prevStep = () => {
		setCurrent((current) => current - 1);
	};

	return (
		<View style={styles.container}>
			<View style={styles.circleContainer}>
				<View style={styles.progressbg}></View>
				<View style={[styles.progress, { width: current * 70 }]}></View>
				<View style={[styles.circle, current >= 0 ? styles.active : '']}>
					<Text style={styles.step}>1</Text>
				</View>
				<View style={[styles.circle, current >= 1 ? styles.active : '']}>
					<Text style={styles.step}>2</Text>
				</View>
				<View style={[styles.circle, current >= 2 ? styles.active : '']}>
					<Text style={styles.step}>3</Text>
				</View>
				<View style={[styles.circle, current >= 3 ? styles.active : '']}>
					<Text style={styles.step}>4</Text>
				</View>
				<View style={[styles.circle, current >= 4 ? styles.active : '']}>
					<Text style={styles.step}>5</Text>
				</View>
			</View>
			<View style={styles.buttonContainer}>
				<View style={styles.button}>
					<Button
						disabled={current > 0 ? false : true}
						title='Previous'
						color='#fff'
						onPress={prevStep}
					/>
				</View>
				<View style={styles.button}>
					<Button
						style={{ fontSize: 20 }}
						disabled={current > 3 ? true : false}
						title='Next'
						color='#fff'
						onPress={nextStep}
					/>
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
	circleContainer: {
		flexDirection: 'row',
		marginTop: 50
	},
	progressbg: {
		position: 'absolute',
		width: 300,
		height: 7,
		top: 18,
		left: 50,
		backgroundColor: '#dfe0df',
	},
	progress: {
		position: 'absolute',
		width: '65%',
		height: 7,
		top: 18,
		left: 50,
		backgroundColor: '#2b93db',
	},
	circle: {
		marginHorizontal: 15,
		marginBottom: 30,
		paddingVertical: 5,
		paddingHorizontal: 13,
		borderRadius: 25,
		borderWidth: 3,
		borderColor: '#dfe0df',
		backgroundColor: '#fff',
	},
	step: {
		fontSize: 22,
	},
	buttonContainer: {
		flexDirection: 'row',
	},
	button: {
		backgroundColor: '#2b93db',
		borderRadius: 7,
		marginHorizontal: 10,
		paddingVertical: 5,
		paddingHorizontal: 15,
	},
	active: {
		borderColor: '#3498db',
	},
});

export default ProgressSteps;
