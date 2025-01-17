import React from 'react';
import 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import {enableScreens} from 'react-native-screens';


enableScreens()

import BoardList from './boardList';
import BoardDetail from './boardDetail';
import BoardWrite from './boardWrite';
import BoardModify from './boardModify';

const Stack = createStackNavigator();  //네비게이션을 Stack 기반으로 동작

function boardNavi() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='BoardList'>
                    <Stack.Screen name='BoardList' component={BoardList}/>
                    <Stack.Screen name='BoardDetail' component={BoardDetail}/>
                    <Stack.Screen name='BoardWrite' component={BoardWrite}/>
                    <Stack.Screen name='BoardModify' component={BoardModify}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

export default boardNavi;