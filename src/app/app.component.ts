import { Component, ViewChild } from '@angular/core';
import { NgxTuiCalendarDirective } from '../../projects/ngx-tui-calendar/src/lib';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'app';

	@ViewChild('calendar') calendar: NgxTuiCalendarDirective;

	constructor() {
		//this.calendar.createSchedule();
	}

	onDate(date) {
		console.error(date);
	}

	onTime(dateTime) {
		console.error(dateTime);
	}

	onSchedule(schedule) {
		console.error(schedule);
	}

	onDateChange($event) {
		console.log(this.calendar);
		
		this.calendar.setDate(new Date($event.target.value));
		//console.log($event.target.value);
	}
}
