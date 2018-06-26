export interface Schedule {
  id: string
  calendarId: string
  title: string
  start: string | Date
  end: string | Date
  isAllDay?: boolean
  category?: string
  dueDateClass?: string
  location?: string
  attendees?: Array<string>
  recurrenceRule?: any
  isPending?: boolean
  isFocused?: boolean
  isVisible?: boolean
  isReadOnly?: boolean
  isPrivate?: boolean
  color?: string
  bgColor?: string
  dragBgColor?: string
  borderColor?: string
  customStyle?: string
  raw?: any
}
