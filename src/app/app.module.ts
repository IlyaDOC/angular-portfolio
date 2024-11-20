import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import { MainComponent } from './views/main/main.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TimelineModule} from 'primeng/timeline';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    TimelineModule,
    AppRoutingModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
