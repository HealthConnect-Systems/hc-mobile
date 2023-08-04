import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import HomeTab from './home';
import ClinicsScreen from './clinics';
import PharmaciesScreen from './pharmacies';
import DoctorsScreen from './doctors';



const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'Home' },
    { key: 'clinics', title: 'Clinics', icon: 'album' },
    { key: 'pharmaices', title: 'Pharmaices', icon: 'history' },
    { key: 'doctors', title: 'Doctors', icon: 'history' },

  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeTab,
    clinics: ClinicsScreen,
    pharmaices: PharmaciesScreen,
    doctors: DoctorsScreen


  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />

  );
};

export default MyComponent;