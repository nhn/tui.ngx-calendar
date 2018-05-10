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
import { TuiCalendarOptions, TuiCalendarDefaults } from './ngx-tui-calendar-defaults.service'

@Component({
  selector: 'ngx-tui-calendar',
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

  private tuiCalendar: any;

  constructor(private elm: ElementRef, private defaults: TuiCalendarDefaults) { }

  ngAfterViewInit(): void {
    const options: TuiCalendarOptions = {
      defaultView: this.defaultView,
      taskView: this.taskView,
      scheduleView: this.scheduleView,
      template: this.template,
      month: this.month,
      week: this.week
    }

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
  }

  ngOnChanges(changes: SimpleChanges): void { }


  private updateValue(): void {
    if (this.tuiCalendar) {
      // console.log(this.tuiCalendar);
    }
  }
}
