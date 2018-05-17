import { Component, ViewChild } from '@angular/core';
import { NgxTuiCalendarComponent } from '../../projects/ngx-tui-calendar/src/lib';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'app';

	@ViewChild('calendar') calendar: NgxTuiCalendarComponent;

	dummy = {
		id: '3',
		calendarId: '1',
		title: 'second schedule',
		category: 'time',
		dueDateClass: '',
		start: '2018-05-18T17:30:00+09:00',
		end: '2018-05-19T17:31:00+09:00'
	};

	constructor() {
	}

	onDate(date) {
		console.error(date);
	}

	onTime(dateTime) {
		console.error(dateTime);

		const newDummy = this.dummy;
		newDummy.title = 'schedule ' + Math.random();
		newDummy.start = dateTime;
		const endDate = new Date(dateTime);
		endDate.setHours(endDate.getHours() + (Math.round( Math.random() * 10)));
		newDummy.end = endDate.toISOString();

		this.calendar.createSchedule(newDummy);
	}

	onSchedule(schedule) {
		console.error(schedule);
	}
}
