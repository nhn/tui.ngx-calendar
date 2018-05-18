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

	constructor() {
	}

	onDate(date) {
		//console.log(date);
	}

	onTime(dateTime) {
		//console.log(dateTime);
	}

	onSchedule(schedule) {
		//console.log(schedule);
	}

	onDateChange($event) {
		this.calendar.setDate(new Date($event.target.value));
	}
}
