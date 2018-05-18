import { Component, ElementRef, Input, Output, EventEmitter, AfterViewInit, OnChanges, SimpleChanges, OnInit } from '@angular/core';

import * as Calendar from 'tui-calendar';
import { TuiCalendarOptions, TuiCalendarDefaults } from './ngx-tui-calendar-defaults.service';

@Component({
	selector: 'ngx-tui-calendar',
	template: ''
})
export class NgxTuiCalendarComponent implements OnInit, AfterViewInit, OnChanges, TuiCalendarOptions {

	@Input() defaultView: string;
	@Input() taskView: boolean;
	@Input() scheduleView: boolean;
	@Input() template: object;
	@Input() month: object;
	@Input() week: object;

	@Output() tuiCalendarCreated: EventEmitter<{ tuiCalendar: any }> = new EventEmitter();
	@Output() dayNameClicked: EventEmitter<{ any }> = new EventEmitter();
	@Output() timeClicked: EventEmitter<{ any }> = new EventEmitter();
	@Output() scheduleClicked: EventEmitter<{ any }> = new EventEmitter();

	private tuiCalendar: any;

	constructor(private elm: ElementRef, private defaults: TuiCalendarDefaults) { }

	ngOnInit(): void { }

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

		this.tuiCalendar.on('beforeCreateSchedule', function (event) {
			if (event.triggerEventName === 'mouseup') {
				self.timeClicked.emit(event.start);
			}
		});

		this.tuiCalendar.on('beforeDeleteSchedule', function (event) {
		});

		this.tuiCalendar.on('beforeUpdateSchedule', function (event) {
		});

		this.tuiCalendar.on('clickDayname', function (event) {
			self.dayNameClicked.emit(event.date);
		});

		this.tuiCalendar.on('clickSchedule', function (event) {
			self.scheduleClicked.emit(event);
		});
	}

	ngOnChanges(changes: SimpleChanges): void { }

	public setTimeZoneOffset(offset: number) {
		this.tuiCalendar.setTimeZoneOffset(offset);
	}

	public setTimeZoneOffsetCallback(offset: void) {
		this.tuiCalendar.setTimeZoneOffset(offset);
	}

	public changeView(view: string) {
		this.tuiCalendar.changeView(view);
	}

	public clear() {
		this.tuiCalendar.clear();
	}

	public createSchedules(schedules: any[]) {
		this.tuiCalendar.createSchedules(schedules);
	}

	public deleteSchedule(scheduleId: string, calendarId: string, silent: boolean) {
		this.tuiCalendar.deleteSchedule(scheduleId, calendarId, silent);
	}

	public destroy() {
		this.tuiCalendar.destroy();
	}

	public getDate() {
		this.tuiCalendar.getDate();
	}

	public getDateRangeEnd() {
		this.tuiCalendar.getDateRangeEnd();
	}

	public getDateRangeStart() {
		this.tuiCalendar.getDateRangeStart();
	}

	public getElement(scheduleId: string, calendarId: string) {
		this.tuiCalendar.getElement(scheduleId, calendarId);
	}

	public getOptions() {
		this.tuiCalendar.getOptions();
	}

	public getSchedule(scheduleId: string, calendarId: string) {
		this.tuiCalendar.getSchedule(scheduleId, calendarId);
	}

	public getViewName() {
		this.tuiCalendar.getViewName();
	}

	public hideMoreView() {
		this.tuiCalendar.hideMoreView();
	}

	public next() {
		this.tuiCalendar.next();
	}

	public prev() {
		this.tuiCalendar.prev();
	}

	public openCreationPopup(schedule: any) {
		this.tuiCalendar.openCreationPopup(schedule);
	}

	public render() {
		this.tuiCalendar.render();
	}

	public scrollToNow() {
		this.tuiCalendar.scrollToNow();
	}

	public setCalendarColor(calendarId: string, option: any, silent: boolean) {
		this.tuiCalendar.setCalendarColor(calendarId, option, silent);
	}

	public setCalendars(calendars: any[]) {
		this.tuiCalendar.setCalendars(calendars);
	}

	public setDate(date: Date | string) {
		this.tuiCalendar.setDate(date);
	}

	public setOptions(options: any, silent: boolean) {
		this.tuiCalendar.setOptions(options, silent);
	}

	public setTheme(theme: string[]) {
		this.tuiCalendar.setTheme(theme);
	}

	public today() {
		this.tuiCalendar.today();
	}

	public toggleSchedules(calendarId: string, toHide: boolean, render: boolean) {
		this.tuiCalendar.toggleSchedules(calendarId, toHide, render);
	}

	public updateSchedule(scheduleId: string, calendarId: string, scheduleData: any, silent: boolean) {
		this.tuiCalendar.updateSchedule(scheduleId, calendarId, scheduleData, silent);
	}

}
