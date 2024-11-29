import type { EventSubscription } from "expo-modules-core"

import { BackgroundTimerEvent } from "./src/BackgroundTimer.types"
import BackgroundTimerModule from "./src/BackgroundTimerModule"

const onBackgroundTimeActiveName = "onBackgroundTimeActive"

export function addBackgroundTimerListener(listener: (event: BackgroundTimerEvent) => void): EventSubscription {
	return BackgroundTimerModule.addListener(onBackgroundTimeActiveName, listener)
}

export { BackgroundTimerEvent }
