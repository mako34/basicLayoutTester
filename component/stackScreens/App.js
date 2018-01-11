import React from 'react';

import { StackNavigator } from 'react-navigation';

import ScreenIndex from './1_ScreenIndex';
import ScreenMenu from './2_SideMenu';
import ScreenOptions from './3_Options';
import ScreenParticipants from './4_Participants';
import ScreenSecurity from './5_Security';




const App = StackNavigator({
    ScreenIndex: { screen: ScreenIndex},
    ScreenMenu: { screen: ScreenMenu},
    ScreenOptions: {screen: ScreenOptions},
    ScreenParticipants: {screen: ScreenParticipants},
    ScreenSecurity: {screen: ScreenSecurity},

})

export default App;