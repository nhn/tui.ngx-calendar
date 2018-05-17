import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { NgxTuiCalendarDirective } from './ngx-tui-calendar.directive';
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
	declarations: [NgxTuiCalendarDirective],
	exports: [NgxTuiCalendarDirective],
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
