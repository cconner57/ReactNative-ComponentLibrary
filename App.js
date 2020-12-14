import React, { useState } from 'react';
import AppNavigator from './Navigation/AppNavigator';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

const fetchFonts = () => {
	return Font.loadAsync({
		'roboto': require('./assets/fonts/Roboto-Regular.ttf'),
		'roboto-light': require('./assets/fonts/Roboto-Light.ttf'),
		'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
		'luckiestGuy': require('./assets/fonts/LuckiestGuy-Regular.ttf'),
	});
};

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);

	if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => {
					setFontLoaded(true);
				}}
			/>
		);
	}
	return (
		<>
			<AppNavigator />
		</>
	);
}
