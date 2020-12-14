import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../Screen/HomeScreen';
import ExpandingCards from '../Projects/ExpandingCards';
import ProgressSteps from '../Projects/ProgressSteps';
import HiddenSearchWidget from '../Projects/HiddenSearchWidget';
import BlurryImage from '../Projects/BlurryImage';
import SoundBoard from '../Projects/SoundBoard';
import DadJoke from '../Projects/DadJoke';

const Stack = createStackNavigator();

const AppNavigator = (props) => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						shadowColor: '#000',
						shadowOffset: {
							width: 0,
							height: 5,
						},
						shadowOpacity: 0.4,
						shadowRadius: 5.0,
					},
					headerTitleStyle: {
						fontFamily: 'roboto-bold',
						fontSize: 20
					},
				}}>
				<Stack.Screen
					name='Home'
					component={HomeScreen}
					options={{ title: '50 Projects in 50 Days(ish)' }}
				/>
				<Stack.Screen name='Expanding Cards' component={ExpandingCards} />
				<Stack.Screen name='Progress Steps' component={ProgressSteps} />
				<Stack.Screen name='Search Widget' component={HiddenSearchWidget} />
				<Stack.Screen name='Blurry Image' component={BlurryImage} />
				<Stack.Screen name='Sound Board' component={SoundBoard} />
				<Stack.Screen name='Dad Jokes' component={DadJoke} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
