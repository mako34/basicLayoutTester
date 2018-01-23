import React from 'react';
import { DrawerNavigator, StackNavigator} from 'react-navigation';

import ScreenUno from './ScreenUno';
import ScreenDos from './ScreenDos';

import ScreenIndex from './ScreenIndex';
import ScreenOptions from './Options';
import ScreenParticipants from './Participants';
import ScreenSecurity from './Security';
import ScreenGoTo from './GoTo';
import ScreenNewMatter from './NewMatter';

import SideMenu from './SideMenu';

const App = StackNavigator({
    ScreenIndex: { screen: ScreenIndex},
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

export default routeConfiguration;

