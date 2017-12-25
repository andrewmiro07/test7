import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DataService, MenuSections } from './data.service';
import { DxDataGridModule, DxSelectBoxModule, DxCheckBoxModule, DxNumberBoxModule, DxButtonModule, DxFormModule, DxFormComponent, DxProgressBarModule } from 'devextreme-angular';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DxDataGridModule, DxSelectBoxModule, DxCheckBoxModule, DxNumberBoxModule, DxButtonModule, DxFormModule, DxProgressBarModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})

export class AppModule { }
