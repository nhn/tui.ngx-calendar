import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxTuiCalendarModule } from '../../projects/ngx-tui-calendar/src/lib';


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		NgxTuiCalendarModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
