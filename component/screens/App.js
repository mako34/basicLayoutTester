import React from 'react';
import { DrawerNavigator, StackNavigator} from 'react-navigation';

import ScreenUno from './ScreenUno';
import ScreenDos from './ScreenDos';


import stackScreenNavigator from '../stackScreens/App';

//

import ScreenIndex from './1_ScreenIndex';
import ScreenMenu from './2_SideMenu';
import ScreenOptions from './3_Options';
import ScreenParticipants from './4_Participants';
import ScreenSecurity from './5_Security';
import ScreenGoTo from './6_GoTo';
import ScreenNewMatter from './7_NewMatter';

import SideMenu from './SideMenu';

//

// import stackNav from './stacknav';


const App = StackNavigator({
    ScreenIndex: { screen: ScreenIndex},
    ScreenMenu: { screen: ScreenMenu},
    ScreenOptions: {screen: ScreenOptions},
    ScreenParticipants: {screen: ScreenParticipants},
    ScreenSecurity: {screen: ScreenSecurity},
    ScreenGoTo: {screen: ScreenGoTo},
    ScreenNewMatter: {screen: ScreenNewMatter},

}, {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
   }
)

//drawer items,
const routeConfiguration = DrawerNavigator({
    ScreenUno: { screen: App },
    ScreenDos: { screen: ScreenDos },
    ScreenTres: { screen: ScreenUno }

}, {
    contentComponent: SideMenu,
    drawerWidth: 320}

);


//






 
export default routeConfiguration;

