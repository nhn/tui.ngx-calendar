import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { NgxTuiCalendarComponent } from './ngx-tui-calendar.component';
import { TuiCalendarOptions, TuiCalendarDefaults } from './ngx-tui-calendar-defaults.service';

export const USER_DEFAULTS: InjectionToken<string> = new InjectionToken(
	'tuiCalendar defaults'
);

export function defaultsFactory(userDefaults: TuiCalendarOptions): TuiCalendarOptions {
	const defaults: TuiCalendarDefaults = new TuiCalendarDefaults();
	Object.assign(defaults, userDefaults);
	return defaults;
}
@NgModule({
	declarations: [NgxTuiCalendarComponent],
	exports: [NgxTuiCalendarComponent],
	providers: [{ provide: TuiCalendarDefaults, useClass: TuiCalendarDefaults }]
})
export class NgxTuiCalendarModule {

	static forRoot(userDefaults: TuiCalendarOptions = {}): ModuleWithProviders {
		return {
			ngModule: NgxTuiCalendarModule,
			providers: [
				{
					provide: USER_DEFAULTS,
					useValue: userDefaults
				},
				{
					provide: TuiCalendarDefaults,
					useFactory: defaultsFactory,
					deps: [USER_DEFAULTS]
				}
			]
		};
	}
}
