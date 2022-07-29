import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CollectionIcon } from 'src/components/icons/NavigationIcons/CollectionIcon';
import { HomeIcon } from 'src/components/icons/NavigationIcons/HomeIcon';
import { PodcastIcon } from 'src/components/icons/NavigationIcons/PodcastIcon';
import { colors, config } from 'src/theme/config';
import { Screens } from 'src/components/Navigation/NavigationRoutes';
import { CollectionStackScreen, HomeStackScreen, PodcastStackScreen } from './StackNavigation';
import { View } from 'react-native';

const Tabs = createBottomTabNavigator();

export const TabsNavigation = () => {
    return (
        <Tabs.Navigator initialRouteName={Screens.COLLECTION_TAB_SCREEN}>
            <Tabs.Screen
                name={Screens.HOME_TAB_SCREEN}
                component={HomeStackScreen}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,

                    tabBarIcon: ({ focused }) => {
                        return focused ? (
                            <HomeIcon
                                color={colors.black.default}
                                width={config.widthNavigationIcon}
                                height={config.heightNavigationIcon}
                            />
                        ) : (
                            <HomeIcon
                                color={colors.silver.default}
                                width={config.widthNavigationIcon}
                                height={config.heightNavigationIcon}
                            />
                        );
                    },
                }}
            />
            <Tabs.Screen
                name={Screens.PODCASTS_TAB_SCREEN}
                component={PodcastStackScreen}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return focused ? (
                            <PodcastIcon
                                color={colors.black.default}
                                width={config.widthNavigationIcon}
                                height={config.heightNavigationIcon}
                            />
                        ) : (
                            <PodcastIcon
                                color={colors.silver.default}
                                width={config.widthNavigationIcon}
                                height={config.heightNavigationIcon}
                            />
                        );
                    },
                }}
            />
            <Tabs.Screen
                name={Screens.COLLECTION_TAB_SCREEN}
                component={CollectionStackScreen}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return focused ? (
                            <CollectionIcon
                                color={colors.black.default}
                                width={config.widthNavigationIcon}
                                height={config.heightNavigationIcon}
                            />
                        ) : (
                            <CollectionIcon
                                color={colors.silver.default}
                                width={config.widthNavigationIcon}
                                height={config.heightNavigationIcon}
                            />
                        );
                    },
                }}
            />
        </Tabs.Navigator>
    );
};
