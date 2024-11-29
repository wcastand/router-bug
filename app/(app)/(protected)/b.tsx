import { useRouter } from "expo-router"
import {Button, Text, View } from "react-native"

export default function B() {
  const router = useRouter()
  return <View>
    <Text>B</Text>
    <Button title="Go to C" onPress={() => router.push("/c")} />
    </View>
}