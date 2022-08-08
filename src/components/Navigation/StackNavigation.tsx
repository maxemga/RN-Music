import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabsNavigation } from 'src/components/Navigation/TabsNavigation';
import { Screens } from 'src/components/Navigation/NavigationRoutes';
import { HomeHeader } from '../Home/Header/HomeHeader';
import { colors } from 'src/theme/config';
import { HomeScreen } from 'src/screens/Home/HomeScreen';
import { PodcastsScreen } from 'src/screens/Podcasts/PodcastsScreen';
import { CollectionScreen } from 'src/screens/Collection/CollectionScreen';
import { PodcastHeader } from 'src/components/Podcasts/Header/PodcastHeader';
import { CollectionHeader } from 'src/components/Collection/Header/CollectionHeader';
import { TracksComponent } from 'src/components/Collection/Tracks/TracksComponent';
import { CollectionContainerHeader } from 'src/components/Collection/Header/CollectionContainerHeader';
import { SearchComponent } from '../Collection/Elements/SearchComponent';
import { Text, View } from 'react-native';
import { TrackPlayerComponent } from '../Collection/Tracks/Modal/TrackPlayerComponent';

const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const PodcastStack = createNativeStackNavigator();
const CollectionStack = createNativeStackNavigator();

export const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Screens.TABS_BOTTOM}>
                <Stack.Group>
                    <Stack.Screen
                        name={Screens.TABS_BOTTOM}
                        options={{ headerShown: false }}
                        component={TabsNavigation}></Stack.Screen>
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name={Screens.HOME_SCREEN}
                component={HomeScreen}
                options={{
                    header: () => <HomeHeader />,
                    contentStyle: { backgroundColor: colors.white.default },
                }}
            />
        </HomeStack.Navigator>
    );
};
export const PodcastStackScreen = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name={Screens.PODCASTS_SCREEN}
                component={PodcastsScreen}
                options={{
                    header: () => <PodcastHeader />,
                    contentStyle: { backgroundColor: colors.white.default },
                }}
            />
        </HomeStack.Navigator>
    );
};

export const CollectionStackScreen = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Group>
                <HomeStack.Screen
                    name={Screens.COLLECTION_SCREEN}
                    component={CollectionScreen}
                    options={{
                        header: () => <CollectionHeader />,
                        contentStyle: { backgroundColor: colors.white.default },
                    }}
                />
                <HomeStack.Screen
                    name={Screens.COLLECTION_SCREEN_TRACKS}
                    component={TracksComponent}
                    options={{
                        header: () => <CollectionContainerHeader />,
                        contentStyle: { backgroundColor: colors.white.default },
                    }}
                />
                <HomeStack.Screen
                    name={'search'}
                    component={TracksComponent}
                    options={{
                        header: () => <CollectionContainerHeader />,
                        contentStyle: { backgroundColor: colors.white.default },
                    }}
                />
            </HomeStack.Group>
            <HomeStack.Group screenOptions={{ presentation: 'containedModal' }}>
                <HomeStack.Screen
                    name={'screen'}
                    component={SearchComponent}
                    options={{
                        headerShown: false,
                        contentStyle: { backgroundColor: 'transparent' },
                    }}
                />
            </HomeStack.Group>
            <HomeStack.Group screenOptions={{ presentation: 'fullScreenModal' }}>
                <HomeStack.Screen
                    name={Screens.TRACKS_PLAYER_MODAL}
                    component={TrackPlayerComponent}
                    options={{
                        headerShown: false,
                        contentStyle: { backgroundColor: '#807A77' },
                    }}
                />
            </HomeStack.Group>
        </HomeStack.Navigator>
    );
};
