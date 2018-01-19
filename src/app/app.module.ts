import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DataService, MenuSections } from './data.service';
import { DxDataGridModule } from 'devextreme-angular';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DxDataGridModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})

export class AppModule { }
