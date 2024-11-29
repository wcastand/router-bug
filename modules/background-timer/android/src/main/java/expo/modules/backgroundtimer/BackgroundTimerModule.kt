package expo.modules.backgroundtimer

import androidx.core.os.bundleOf
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

const val BACKGROUND_TIMER_ACTIVE_EVENT_NAME = "onBackgroundTimeActive"

class BackgroundTimerModule : Module() {
  var backgroundtime = 0L
  override fun definition() = ModuleDefinition {
    Name("BackgroundTimer")

    Events(BACKGROUND_TIMER_ACTIVE_EVENT_NAME)

    OnActivityEntersForeground{
      val now = System.currentTimeMillis()
      val delta = now - backgroundtime
      sendEvent(BACKGROUND_TIMER_ACTIVE_EVENT_NAME, bundleOf("delta" to delta))
    }

    OnActivityEntersBackground{
      backgroundtime = System.currentTimeMillis()
    }
  }
}
