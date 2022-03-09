import {  createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import User from './User';
import Post from './Post';




const Tab = createBottomTabNavigator();


const Main = () => {

    return(
      
            <Tab.Navigator  
              
              initialRouteName={'Home'} 
              screenOptions={ ({route}) =>  ({
                  tabBarIcon: ({focused,color,size}) => {
                    var iconName;
                    let routeName = route.name;
                    if (routeName === 'Home') {
                        iconName = focused ? 'md-home' : 'home-outline';
                    }
                    else if (routeName === 'Posts') {
                        iconName = focused ? 'list-circle-sharp' : 'list-circle-outline';
                    }
                    else if (routeName === 'Users') {
                        iconName = focused ? 'people-circle-sharp' : 'people-circle-outline';
                    }

                    return <Ionicons name={iconName} color={color} size={37}/>
                  },
                  tabBarActiveTintColor: 'tomato',
                  tabBarInactiveTintColor: 'gray',
                  
              })}>
              
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Posts" component={Post} />
                <Tab.Screen name="Users" component={User} />
            </Tab.Navigator>
        
    );
}



export default Main;
