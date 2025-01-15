/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import UI_1 from './components/ui_1';
import UI_Exam from './components/ui_exam';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => UI_Exam);
