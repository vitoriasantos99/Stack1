import React from "react";
import {View} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Feed from "../views/Feed";
import Messages from "../views/Messages";
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator()

export default props => {
    return(
        <View style={{flex:1}}>
            <Tab.Navigator>
                <Tab.Screen name="Feed" component={Feed}/>
                <Tab.Screen name="Messages" component={Messages}/>
            </Tab.Navigator>
        </View>
    )
}

