import React from 'react';
import { Easing, Platform, useColorScheme } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import { Appbar, BottomNavigation, PaperProvider } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Themed from '../components/common/Themed';
import ConfigureStore from '../store';
import HomeScreen from './Home';
import ClinicsScreen from './Clinics';
import PharmaciesScreen from './Pharmacies';
import DoctorsScreen from './Doctors';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';


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
                <PaperProvider theme={theme}>
                    <Appbar.Header mode={'small'} elevated={false} theme={theme} >
                        <Appbar.BackAction onPress={() => { }} />
                        <Appbar.Content title={routes[index].title} />
                        <Appbar.Action icon="calendar" onPress={() => { }} />
                        <Appbar.Action icon="magnify" onPress={() => { }} />
                        <Appbar.Action icon={MORE_ICON} onPress={() => { }} />
                    </Appbar.Header>
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
                        compact={true}
                        shifting={true}
                        labeled={true}
                        getLabelText={({ route }) => route.title}
                        barStyle={{
                            backgroundColor: theme.colors.background,
                            borderTopWidth: 1,
                            paddingBottom: insets.bottom
                        }}
                    />
                </PaperProvider >
            </StoreProvider>
        </>
    );
};  