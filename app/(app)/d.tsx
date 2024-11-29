import { useRouter } from "expo-router"
import {Button, Text, View } from "react-native"

export default function D() {
  const router = useRouter()
  return <View>
    <Text>D</Text>
    <Button title="Go to A" onPress={() => router.push("/a")} />
    </View>
}