import { Navigation } from 'react-native-navigation';
import HomeScreen from "./src/screens/Home/Home";
import ProfileScreen from "./src/screens/Profile/Profile";



Navigation.registerComponent(
  "dutyFree.HomeScreen",
  () => HomeScreen
);
Navigation.registerComponent(
  "dutyFree.ProfileScreen",
  () => ProfileScreen
);

// Navigation.startSingleScreenApp({
//   screen: {
//     screen: 'dutyFree.HomeScreen',
//     title: 'Welcome'
//   }
// })



export default () => Navigation.startTabBasedApp({
  tabs: [
    {
      label: "Home",
      screen: 'dutyFree.HomeScreen',
      title: "Home"
    },
    {
      label: "Profile",
      screen: 'dutyFree.ProfileScreen',
      title: "Profile"
    },
  ]
})


