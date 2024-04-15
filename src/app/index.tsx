import { useCompanyLoginStore } from "@/store/company-login-store";
import { Redirect } from "expo-router";
import { StatusBar, Text, View } from "react-native";

export default function Home() {
  const companyLoginStore = useCompanyLoginStore()

  if (!companyLoginStore.data) {
    return <Redirect href="./login" />
  }

  return (
    <View className="flex-1 bg-white-0 justify-center items-center p-8">
      <StatusBar barStyle="dark-content" />

      <Text>Home activity!</Text>
    </View>
  )
}
