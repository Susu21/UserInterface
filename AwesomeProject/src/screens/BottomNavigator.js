import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontIsto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function BottomNavigator() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#5F0B65',
        tabBarActiveBackgroundColor: '#FFF',
        tabBarInactiveBackgroundColor: 'red',
      }}
      tabBar={props => (
        <BottomFabBar
          focusedButtonStyle={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.41,
            shadowRadius: 9.11,
            elevation: 14,
            backgroundColor: '#fff',
          }}
          bottomBarContainerStyle={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
          }}
          {...props}
        />
      )}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          // headerTitle: 'Нүүр',
          // headerTitleAlign: 'center',
          // headerShadowVisible: false,
          // headerTitleStyle: {color: '#585858', fontSize: 18},
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: COLORS.TREE_COLOR,
          tabBarInactiveTintColor: '#585858',
          tabBarIcon: ({color, size}) => (
            <Feather name={'home'} color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Search}
        options={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.TREE_COLOR,
          tabBarInactiveTintColor: '#585858',
          tabBarIcon: ({color, size}) => (
            <FontIsto name={'search'} size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Tree}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: COLORS.TREE_COLOR,
          tabBarInactiveTintColor: '#585858',
          tabBarIcon: ({color, size}) => (
            <FontIsto name={'sourcetree'} size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Profile}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarInactiveTintColor: '#585858',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name={'user-circle-o'} size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigator;
