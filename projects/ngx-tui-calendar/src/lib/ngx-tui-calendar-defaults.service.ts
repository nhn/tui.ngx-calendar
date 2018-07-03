import { WeekOptions } from "./Models/WeekOptions";
import { MonthOptions } from "./Models/MonthOptions";
import { Template } from "./Models/Template";

export interface TuiCalendarOptions {
	defaultView?: string;
	taskView?: boolean;
	scheduleView?: boolean;
	template?: Template;
	month?: MonthOptions;
  week?: WeekOptions;
  disableDblClick?:boolean
}

export class TuiCalendarDefaults {
	defaultView = 'week';
	taskView = false;
	useCreationPopup = false;
	useDetailPopup = false;
  scheduleView = true;
  disableDblClick = false;

  week: WeekOptions = {
		daynames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		startDayOfWeek: 1,
		narrowWeekend: false,
	};
}
