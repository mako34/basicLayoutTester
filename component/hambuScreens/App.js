import React from 'react';
import { DrawerNavigator} from 'react-navigation';

import ScreenUno from './ScreenUno';
import ScreenDos from './ScreenDos';

import ScreenOne from '../stackScreens/ScreenOne';
import ScreenTwo from '../stackScreens/ScreenOne';
import ScreenThree from '../stackScreens/ScreenOne';

import stackScreenNavigator from '../stackScreens/App';


// import stackNav from './stacknav';


//drawer items,
const routeConfiguration = DrawerNavigator({
    ScreenUno: { screen: ScreenUno },
    ScreenDos: { screen: ScreenDos }
}
);

 
export default routeConfiguration;

