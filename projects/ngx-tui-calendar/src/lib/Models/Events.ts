import { TimeCreationGuide } from "./TimeCreationGuide";
import { Schedule } from "./Schedule";

export interface AfterRenderScheduleEvent {
  schedule: Schedule
}

export interface BeforeCreateScheduleEvent {
  isAllDay: boolean
  start: Date
  end: Date
  guide: TimeCreationGuide
  triggerEventName: string
}

export interface BeforeDeleteScheduleEvent {
  schedule: Schedule
}

export interface BeforeUpdateScheduleEvent {
  schedule: Schedule
  start: Date
  end: Date
}

export interface ClickDaynameEvent {
  date:string | Date
}

export interface ClickScheduleEvent {
  schedule: Schedule
  event : MouseEvent
}
