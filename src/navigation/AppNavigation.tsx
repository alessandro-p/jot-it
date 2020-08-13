import {BottomTabBarOptions, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import React from 'react';
import {Icon} from 'react-native-elements';

import theme from '../theme';
import {HomeStack} from './stacks/HomeStack';

export enum AvailableRoutes
{
    HOME = 'home',
}

const MainTabNavigation = createBottomTabNavigator();

const main_tab_bar_options: BottomTabBarOptions = {
    activeTintColor: theme.colors.primary,
    inactiveTintColor: theme.colors.secondary
};

const main_tab_screen_options = ({route}: {route: RouteProp<Record<string, object | undefined>, string>}) =>
{
    return ({
        tabBarIcon: ({focused}: {focused: boolean}) =>
        {
            const key = route.key.split('-')[0].toLowerCase();
            const color = focused ? theme.colors.primary : theme.colors.secondary;
            switch(key as AvailableRoutes)
            {
                case AvailableRoutes.HOME:
                    return <Icon name='home' color={color} type={'MaterialIcons'} size={theme.icon_size.md} />;

                default:
                    return <></>;
            }
        }
    });
};

const AppNavigation = () =>
{
    return (
        <NavigationContainer>
            <MainTabNavigation.Navigator screenOptions={main_tab_screen_options} tabBarOptions={main_tab_bar_options}>
                <MainTabNavigation.Screen options={{title: 'Home'}} name='home' component={HomeStack} />
            </MainTabNavigation.Navigator>
        </NavigationContainer>
    );
};

export {AppNavigation};
