import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    useKeepAwake();

    const [customFontLoaded] = useFonts({
        // 'Inter-Black': require('../assets/fonts/Inter-Black.otf'),
        // 'Inter-BlackItalic': require('../assets/fonts/Inter-BlackItalic.otf'),
    });

    const [initialState, setInitialState] = useState();
    const [isRestoringInitialState, setIsRestoringInitialState] = useState(true);

    useEffect(() => {
        const restoreState = async () => {
            try {
                const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
                const state = JSON.parse(savedStateString);

                setInitialState(state);
            } finally {
                setIsRestoringInitialState(false);
            }
        };

        if (isRestoringInitialState) {
            restoreState();
        }
    }, [isRestoringInitialState]);

    if (!customFontLoaded || isRestoringInitialState) {
        return null;
    }


    const preferences = usePreferences();
    const theme = useTheme();
    const configuredFontTheme = useConfiguredFontTheme();
    const combinedTheme = useMemo(() => {
        const t = mergeTheme(theme, configuredFontTheme);
        return t;
    }, [theme, configuredFontTheme]);

    return (
        <PaperProvider theme={combinedTheme}>
            <PreferencesContext.Provider value={preferences}>
                <React.Fragment>
                    <NavigationContainer
                        theme={combinedTheme}
                        initialState={initialState}
                        onStateChange={(state) =>
                            AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
                        }
                    >
                        <SafeAreaInsetsContext.Consumer>
                            {(insets) => {
                                const { left, right } = insets || { left: 0, right: 0 };
                                const collapsedDrawerWidth = 80 + Math.max(left, right);
                                return (
                                    <Drawer.Navigator
                                        screenOptions={{
                                            drawerStyle: collapsed && {
                                                width: collapsedDrawerWidth,
                                            },
                                        }}
                                    // drawerContent={() => <DrawerItems />}
                                    >
                                        <Drawer.Screen
                                            name="Home"
                                            component={App}
                                            options={{ headerShown: false }}
                                        />
                                    </Drawer.Navigator>
                                );
                            }}
                        </SafeAreaInsetsContext.Consumer>
                    </NavigationContainer>
                </React.Fragment>
            </PreferencesContext.Provider>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
