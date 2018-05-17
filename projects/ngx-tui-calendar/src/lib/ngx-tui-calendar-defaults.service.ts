export interface TuiCalendarOptions {
	defaultView?: string;
	taskView?: boolean;
	scheduleView?: boolean;
	template?: object;
	month?: object;
	week?: object;
}

export class TuiCalendarDefaults {
	defaultView = 'week';
	taskView = false;
	useCreationPopup = false;
	useDetailPopup = false;
	scheduleView=true;

	week: object = {
		daynames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		startDayOfWeek: 1,
		narrowWeekend: false,
	};
}
