import { Component, ViewChild } from '@angular/core';
import { NgxTuiCalendarComponent } from '../../projects/ngx-tui-calendar/src/lib';
import { ClickDaynameEvent, BeforeCreateScheduleEvent } from '../../projects/ngx-tui-calendar/src/lib/Models/Events';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'app';

	@ViewChild('calendar') calendar: NgxTuiCalendarComponent;


	calendarViews = [
		{ value: '0', name: 'month' },
		{ value: '1', name: 'week' },
		{ value: '2', name: 'day' }
	];

	constructor() {
	}


	onTuiCalendarCreated($event) {
		this.calendar.createSchedules([
			{
				id: '1',
				calendarId: '1',
				title: 'my schedule',
				category: 'time',
				dueDateClass: '',
				start: '2018-05-23T10:30:00+00:00',
				end: '2018-05-23T12:30:00+00:00'
			}
		]);
	}

  onBeforeCreateSchedule(event: BeforeCreateScheduleEvent) {
    console.log('beforeCreateScheduleEvent', event);
  }

  onDate(date) {
    console.log('onDate', date);
  }

  onTime(dateTime) {
    console.log('dateTime', dateTime);
  }

	onSchedule(schedule) {
		console.log('schedule', schedule);
	}

	onDateChange($event) {
		this.calendar.setDate(new Date($event.target.value));
	}

	onCalendarToday() {
		this.calendar.today();
	}

	onCalendarNext() {
		this.calendar.next();
	}

	onCalendarPrev() {
		this.calendar.prev();
	}

	onChangeCalendarView($event) {
		this.calendar.changeView(this.calendarViews.find(view => view.value === $event.target.value).name);
	}

}
