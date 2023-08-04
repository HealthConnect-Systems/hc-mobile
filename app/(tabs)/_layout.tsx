import * as React from 'react';
import { Easing } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import HomeTab from './home';
import ClinicsScreen from './clinics';
import PharmaciesScreen from './pharmacies';
import DoctorsScreen from './doctors';


export default () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home' },
    { key: 'clinics', title: 'Clinics', focusedIcon: 'hospital-o' },
    { key: 'pharmaices', title: 'Pharmaices', focusedIcon: 'shopping-bag' },
    { key: 'doctors', title: 'Doctors', focusedIcon: 'user-md' },

  ]);

  return (
    <>
      <BottomNavigation
        safeAreaInsets={{ bottom: 0, top: 0 }}
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        labelMaxFontSizeMultiplier={2}
        renderScene={BottomNavigation.SceneMap({
          home: HomeTab,
          clinics: ClinicsScreen,
          pharmaices: PharmaciesScreen,
          doctors: DoctorsScreen
        })}
        sceneAnimationEnabled={true}
        sceneAnimationType={'shifting'}
        sceneAnimationEasing={Easing.linear}
        getLazy={({ route }) => route.key !== 'home'}

      />
    </>
  );
}; 