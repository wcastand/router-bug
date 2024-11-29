import { useRouter } from "expo-router"
import {Button, Text, View } from "react-native"

export default function C() {
  const router = useRouter()
  return <View>
    <Text>C</Text>
    <Button title="Go to D" onPress={() => router.push("/d")} />
    </View>
}