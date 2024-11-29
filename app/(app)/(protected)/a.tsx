import { useRouter } from "expo-router"
import {Button, Text, View } from "react-native"

export default function A() {
  const router = useRouter()
  return <View>
    <Text>A</Text>
    <Button title="Go to B" onPress={() => router.push("/b")} />
    </View>
}