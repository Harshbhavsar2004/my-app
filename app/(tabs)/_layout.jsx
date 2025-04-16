import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { ThemeToggle } from '~/components/ThemeToggle';
import { PortalHost } from '@rn-primitives/portal';
export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          headerRight: () => <ThemeToggle />,
        }}
      />
      <Tabs.Screen
        name="share"
        options={{
          title: 'Share',
          tabBarIcon: ({ color }) => <FontAwesome name="share-square-o" size={24} color={color} />,
          headerTitleAlign : "left"
        }}
      />
      <Tabs.Screen
        name="timetable"
        options={{
          title: 'TimeTable',
          tabBarIcon: ({ color }) => <FontAwesome name="calendar-times-o" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="downloads"
        options={{
          title: 'Download',
          tabBarIcon: ({ color }) => <FontAwesome name="download" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
      <PortalHost />
    </Tabs>
    
  );
}
