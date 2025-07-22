 import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function HomeBottomLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: '#8e8e93',
                headerShown: false,
                tabBarButton: HapticTab,
                tabBarStyle: {
                    backgroundColor: '#000',
                    borderTopWidth: 0,
                    elevation: 0,
                    ...(Platform.OS === 'ios' && {
                        position: 'absolute',
                        backgroundColor: 'rgba(0,0,0,0.8)',
                    }),
                },
                tabBarLabelStyle: {
                    fontFamily: 'Montserrat',
                    fontSize: 12,
                },
            }}
        >
            <Tabs.Screen
                   name="profile"
                   options={{
                     title: 'Profile',
                     tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.2" color={color} />,
                   }}
                 />
            <Tabs.Screen
                   name="index"
                   options={{
                     title: 'Home',
                     tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
                   }}
                 />
                 <Tabs.Screen
                   name="more"
                   options={{
                     title: 'More',
                     tabBarIcon: ({ color }) => <IconSymbol size={28} name="rectangle.expand.diagonal" color={color} />,
                   }}
                 />
        </Tabs>
    )}
