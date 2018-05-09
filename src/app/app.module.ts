import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgxTuiCalendarModule } from '../../projects/ngx-tui-calendar/src/lib';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxTuiCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
