import React from 'react';
import { Easing, SafeAreaView, useColorScheme } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import { BottomNavigation, PaperProvider } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Themed from '../components/common/Themed';

import ConfigureStore from '../store';
import HomeScreen from './Home';
import ClinicsScreen from './Clinics';
import PharmaciesScreen from './Pharmacies';
import DoctorsScreen from './Doctors';


export default () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Home', focusedIcon: 'home' },
        { key: 'clinics', title: 'Clinics', focusedIcon: 'hospital-building' },
        { key: 'pharmaices', title: 'Pharmaices', focusedIcon: 'shopping' },
        { key: 'doctors', title: 'Doctors', focusedIcon: 'doctor' },
    ]);
    const theme = useColorScheme() === 'dark' ? Themed.dark : Themed.light;
    const insets = useSafeAreaInsets();
    return (
        <>
            <StoreProvider store={ConfigureStore}>
                <PaperProvider theme={Themed.light}>
                    <SafeAreaView style={{ flex: 1 }} >
                        <BottomNavigation
                            navigationState={{ index, routes }}
                            onIndexChange={setIndex}
                            labelMaxFontSizeMultiplier={2}
                            renderScene={BottomNavigation.SceneMap({
                                home: HomeScreen,
                                clinics: ClinicsScreen,
                                pharmaices: PharmaciesScreen,
                                doctors: DoctorsScreen
                            })}
                            sceneAnimationEnabled={true}
                            sceneAnimationType={'shifting'}
                            sceneAnimationEasing={Easing.linear}
                            getLazy={({ route }) => route.key !== 'home'}
                        />
                    </SafeAreaView>
                </PaperProvider >
            </StoreProvider>
        </>
    );
};  