import ExpoModulesCore

let BACKGROUND_TIMER_ACTIVE_EVENT_NAME = "onBackgroundTimeActive"

public class BackgroundTimerModule: Module {
  var backgroundtime = Double.infinity
  public func definition() -> ModuleDefinition {
    Name("BackgroundTimer")

    Events(BACKGROUND_TIMER_ACTIVE_EVENT_NAME)

    OnAppBecomesActive {
      let now = Date().timeIntervalSince1970 * 1000;
      let delta = now - self.backgroundtime
      self.sendEvent(BACKGROUND_TIMER_ACTIVE_EVENT_NAME,["delta": delta == -Double.infinity ? 0 : delta])
      self.backgroundtime = Double.infinity
    }
    
    OnAppEntersBackground {
      self.backgroundtime = Date().timeIntervalSince1970 * 1000;
    }
  }
}
