import {
	Component,
	ElementRef,
	Input,
	Output,
	EventEmitter,
	AfterViewInit,
	OnChanges,
	SimpleChanges
} from '@angular/core';
import * as Calendar from 'tui-calendar';
import { TuiCalendarOptions, TuiCalendarDefaults } from './ngx-tui-calendar-defaults.service';

@Component({
	selector: 'lib-ngx-tui-calendar',
	styleUrls: ['./ngx-tui-calendar.scss'],
	template: ''
})
export class NgxTuiCalendarComponent implements AfterViewInit, OnChanges, TuiCalendarOptions {

	@Input() defaultView: string;
	@Input() taskView: boolean;
	@Input() scheduleView: boolean;
	@Input() template: object;
	@Input() month: object;
	@Input() week: object;

	@Output() tuiCalendarCreated: EventEmitter<{ tuiCalendar: any }> = new EventEmitter();
	@Output() datePicked: EventEmitter<{ any }> = new EventEmitter();
	@Output() timePicked: EventEmitter<{ any }> = new EventEmitter();
	@Output() schedulePicked: EventEmitter<{ any }> = new EventEmitter();

	private tuiCalendar: any;

	constructor(private elm: ElementRef, private defaults: TuiCalendarDefaults) { }

	ngAfterViewInit(): void {
		const self = this;

		const options: TuiCalendarOptions = {
			defaultView: this.defaultView,
			taskView: this.taskView,
			scheduleView: this.scheduleView,
			template: this.template,
			month: this.month,
			week: this.week
		};

		Object.keys(this.defaults).forEach(optionKey => {
			if (typeof options[optionKey] === 'undefined') {
				options[optionKey] = this.defaults[optionKey];
			}
		});

		Object.keys(options).forEach(optionKey => {
			if (typeof options[optionKey] === 'undefined') {
				delete options[optionKey];
			}
		});

		this.tuiCalendar = new Calendar(this.elm.nativeElement, options);

		this.tuiCalendarCreated.emit({ tuiCalendar: this.tuiCalendar });

		this.updateValue();

		this.tuiCalendar.on('clickDayname', function (event) {
			self.datePicked.emit(event.date);
		});

		this.tuiCalendar.on('clickSchedule', function (event) {
			self.schedulePicked.emit(event);
		});


		this.tuiCalendar.on('beforeCreateSchedule', function (event) {

			if (event.triggerEventName === 'mouseup') {
				self.timePicked.emit(event.start);
			}


		});

		/* this.tuiCalendar.createSchedules([
			{
				id: '1',
				calendarId: '1',
				title: 'my schedule',
				category: 'time',
				dueDateClass: '',
				start: '2018-05-18T22:30:00+09:00',
				end: '2018-05-19T02:30:00+09:00'
			},
			{
				id: '2',
				calendarId: '1',
				title: 'second schedule',
				category: 'time',
				dueDateClass: '',
				start: '2018-05-18T17:30:00+09:00',
				end: '2018-05-19T17:31:00+09:00'
			}
		]); */
	}

	ngOnChanges(changes: SimpleChanges): void { }


	private updateValue(): void {
		console.error('updateValue');
		if (this.tuiCalendar) {
			// console.log(this.tuiCalendar);
		}
	}

	public createSchedule(schedule) {
		this.tuiCalendar.createSchedules([schedule]);
	}
}
