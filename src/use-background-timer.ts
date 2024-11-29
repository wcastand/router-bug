import { addBackgroundTimerListener } from "@/modules/background-timer"
import { useEffect } from "react"

const defaultOpts = { delta: 30000, callback: () => void 0 }

export function useBackgroundTimer(
	opts: {
		delta?: number
		callback: (delta: number) => void
	} = defaultOpts,
) {
	const options = { ...defaultOpts, ...opts }
	useEffect(() => {
		const subscription = addBackgroundTimerListener((e) => {
			if (e.delta > options.delta) options.callback(e.delta)
		})
		return () => subscription.remove()
	}, [options])
}