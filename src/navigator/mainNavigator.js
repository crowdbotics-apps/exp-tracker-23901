import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen3194271Navigator from '../features/BlankScreen3194271/navigator';
import BlankScreen3194269Navigator from '../features/BlankScreen3194269/navigator';
import BlankScreen2194005Navigator from '../features/BlankScreen2194005/navigator';
import BlankScreen21194004Navigator from '../features/BlankScreen21194004/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen3194271: { screen: BlankScreen3194271Navigator },
BlankScreen3194269: { screen: BlankScreen3194269Navigator },
BlankScreen2194005: { screen: BlankScreen2194005Navigator },
BlankScreen21194004: { screen: BlankScreen21194004Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
