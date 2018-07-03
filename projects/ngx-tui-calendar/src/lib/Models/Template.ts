export interface Template {
  // milestone title(at left column)
  milestoneTitle?();

  // milestone
  milestone?()

  // task title(at left column)
  taskTitle?()

  // task
  task?()

  // allday title(at left column)
  alldayTitle?()

  // allday
  allday?()

  // time
  time?()

  // month more layer title
  monthMoreTitleDate?()

  // month more layer close button
  monthMoreClose?()

  // month grid header(date, decorator, title)
  monthGridHeader?()

  // month grid footer(date, decorator, title)
  monthGridFooter?()

  // month grid header(exceed schedule count)
  monthGridHeaderExceed?()

  // month grid footer(exceed schedule count)
  monthGridFooterExceed?()

  // weekly dayname
  weekDayname?()

  // monthly dayname
  monthDayname?()

}
