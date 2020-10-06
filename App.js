import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from './Screen/Home'
import Diagnostics from './Screen/Diagnostics'
import Account from './Screen/Account'
import Explore from './Screen/Explore'
import Notifications from './Screen/Notifications'
import { Ionicons,MaterialCommunityIcons,FontAwesome5,MaterialIcons} from '@expo/vector-icons'; 

LogBox.ignoreAllLogs();
const Stack=createStackNavigator();
const Tabs=createBottomTabNavigator();

const taby=()=>{
    return(
      <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused,color}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = "md-home"
          } else if (route.name === 'Explore') {
            <MaterialIcons name="explore" size={24} color="black" />
            if(focused)
            return <MaterialIcons name="explore" size={24} color="green" />
            else
            return<MaterialIcons name="explore" size={24} color="black" />
          }else if(route.name === 'Diagnostics'){
            
            if(focused)
            return <FontAwesome5 name="diagnoses" size={24} color="green" />
            else
            return<FontAwesome5 name="diagnoses" size={24} color="black" />
          }else if(route.name === 'Notifications'){
              iconName="ios-notifications-outline"
          }else if(route.name === 'Account'){
            if(focused)
            return <MaterialCommunityIcons name="account-outline" size={24} color="green" />
            else
            return<MaterialCommunityIcons name="account-outline" size={24} color="black" />
          }

          if(focused)
          return <Ionicons name={iconName} size={24} color="green" />;
          else
          return <Ionicons name={iconName} size={24} color="black" />;
        },
      })}
      options={{ tabBarBadge:""}}
      tabBarOptions={{
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
      }}
    > 
            <Tabs.Screen name="Home"  component={Home} />
            <Tabs.Screen name="Explore" component={Home}/>
            <Tabs.Screen name="Diagnostics" component={Home}/>
            <Tabs.Screen name="Notifications" component={Home}/>
            <Tabs.Screen name="Account" component={Home}/>
        </Tabs.Navigator>
    )
}

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator headerMode="none">
          {/* <Stack.Screen name=""></Stack.Screen> */}
          <Stack.Screen name="tab" component={taby}/>
        </Stack.Navigator>
    </NavigationContainer>
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
