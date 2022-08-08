import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { colors, config } from 'src/theme/config';
import { ITabBar } from 'src/types/type';
import { TracksWidget } from '../Collection/Tracks/TracksWidget';
import { CollectionIcon } from '../icons/NavigationIcons/CollectionIcon';
import { HomeIcon } from '../icons/NavigationIcons/HomeIcon';
import { PodcastIcon } from '../icons/NavigationIcons/PodcastIcon';

export const TabBarComponents: React.FC<ITabBar> = ({ state, navigation, descriptors }) => {
    return (
        <React.Fragment>
            <TracksWidget />
            <View
                style={{
                    flexDirection: 'row',
                    backgroundColor: `${colors.white.default}`,
                    paddingTop: 15,
                    paddingBottom: 40,
                    borderTopColor: `${colors.silver.bright}`,
                    borderTopWidth: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                            ? options.title
                            : route.name;

                    const isFocused = state.index === index;

                    const icons = [
                        {
                            type: (
                                <HomeIcon
                                    color={isFocused ? colors.black.default : colors.silver.default}
                                    width={config.widthNavigationIcon}
                                    height={config.heightNavigationIcon}
                                />
                            ),
                        },
                        {
                            type: (
                                <PodcastIcon
                                    color={isFocused ? colors.black.default : colors.silver.default}
                                    width={config.widthNavigationIcon}
                                    height={config.heightNavigationIcon}
                                />
                            ),
                        },
                        {
                            type: (
                                <CollectionIcon
                                    color={isFocused ? colors.black.default : colors.silver.default}
                                    width={config.widthNavigationIcon}
                                    height={config.heightNavigationIcon}
                                />
                            ),
                        },
                    ];

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    return (
                        <TouchableHighlight
                            key={Math.random()}
                            underlayColor={'none'}
                            accessibilityRole="button"
                            // accessibilityStates={isFocused ? ['selected'] : []}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ flex: 1, alignItems: 'center' }}>
                            {icons[index].type}
                        </TouchableHighlight>
                    );
                })}
            </View>
        </React.Fragment>
    );
};
