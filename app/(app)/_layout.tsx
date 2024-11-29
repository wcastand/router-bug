import { useBackgroundTimer } from "@/src/use-background-timer"
import { Href, Redirect, Stack, usePathname } from "expo-router";
import { useState } from "react";

export default function RootLayout() {
  const pathname = usePathname()
  const [go, setgo] = useState<Href>()

  useBackgroundTimer({
		delta: 0,
		callback(delta) {
			if (delta > 2000){
        console.log("trigger force to /b")
        setgo("/b")
      }
		},
	})

  console.log("pathnane: ", pathname, "goto: ", go)
  if(go) return <Redirect href={go} />

  return <Stack />;
}