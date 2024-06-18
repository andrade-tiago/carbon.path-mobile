import "@/styles/global.css"
import { Stack } from "expo-router"
import { Loading } from "@/components/loading"
import {
  useFonts,
  Roboto_700Bold,
  Roboto_500Medium,
  Roboto_400Regular
} from "@expo-google-fonts/roboto"
import { StatusBar } from "react-native"

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular,
  })

  if (!fontsLoaded) {
    return <Loading />
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  )
}