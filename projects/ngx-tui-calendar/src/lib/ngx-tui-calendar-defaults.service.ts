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
	taskView = true;

	template: object = {
		milestone: function (schedule) {
			return '<span style="color:red;"><i class="fa fa-flag"></i> ' + schedule.title + '</span>';
		},
		milestoneTitle: function () {
			return 'Milestone';
		},
		task: function (schedule) {
			return '&nbsp;&nbsp;#' + schedule.title;
		},
		taskTitle: function () {
			return '<label><input type="checkbox" />Task</label>';
		}, allday: function (schedule) {
			return schedule.title + ' <i class="fa fa-refresh"></i>';
		},
		alldayTitle: function () {
			return 'All Day';
		},
		time: function (schedule) {
			return schedule.title + ' <i class="fa fa-refresh"></i>' + schedule.start;
		}
	};
	week: object = {
		daynames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		startDayOfWeek: 0,
		narrowWeekend: true
	};
}
