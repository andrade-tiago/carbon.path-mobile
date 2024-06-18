import { colors } from "@/styles/colors";
import { Feather, FontAwesome6, Ionicons, Octicons, SimpleLineIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  // const companyLoginStore = useCompanyLoginStore()

  // if (!companyLoginStore.data) {
  //   return <Redirect href="./login" />
  // }
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: colors.primary[5],
      tabBarInactiveTintColor: colors.neutrals[5],
      headerTitleAlign: 'center',
      headerTitleStyle: { fontWeight: 'bold' },
      tabBarStyle: { height: 64 },
      tabBarShowLabel: false,
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Octicons name="home" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="calculator"
        options={{
          title: 'Calculadora',
          tabBarIcon: ({ color }) => <SimpleLineIcons name="calculator" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="challenges"
        options={{
          title: 'Desafios',
          tabBarIcon: ({ color }) => <Ionicons name="trophy-outline" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="hanking"
        options={{
          title: 'Hanking',
          tabBarIcon: ({ color }) => <Feather name="award" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <FontAwesome6 name="circle-user" size={28} color={color} />,
        }}
      />
    </Tabs>
  )
}
