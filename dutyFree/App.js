import { Navigation } from 'react-native-navigation';
import HomeScreen from "./src/screens/Home/Home";
import ProfileScreen from "./src/screens/Profile/Profile";
import ItemDetails from "./src/screens/ItemDetails/ItemDetails"
import Icon from 'react-native-vector-icons/FontAwesome5'



Navigation.registerComponent(
  "dutyFree.HomeScreen",
  () => HomeScreen
);
Navigation.registerComponent(
  "dutyFree.ProfileScreen",
  () => ProfileScreen
);
Navigation.registerComponent(
  "dutyFree.ItemDetailsScreen",
  () => ItemDetails
)





export default () => {
  Promise.all([
    Icon.getImageSource('home',25),
    Icon.getImageSource('user',25)
  ])
  .then(sources => {
    Navigation.startTabBasedApp({
  tabs: [
    {
      label: "Home",
      screen: 'dutyFree.HomeScreen',
      title: "Home",
      icon: sources[0]
    },
    {
      label: "Profile",
      screen: 'dutyFree.ProfileScreen',
      title: "Profile",
      icon: sources[1]
    },
  ],
  tabsStyle: { // optional, **iOS Only** add this if you want to style the tab bar beyond the defaults
    tabBarButtonColor: '#0A0A0A'
  }
})
  })
}
 











