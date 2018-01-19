import { NgModule, Component, enableProdMode, OnInit, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DataService, MenuSections, Form } from './data.service';
import { DxDataGridModule } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { Console } from '@angular/core/src/console';
import {FormsModule} from '@angular/forms';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@NgModule({
  imports: [BrowserModule, DxDataGridModule, FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppComponent implements OnInit {
  //@ViewChild(DxFormComponent) form: DxFormComponent
  title = 'app';
  _counter: number;
  someProperty = '';
  act_tabIndex: string = '0';
  num_tmp: number = 0;
  sections: MenuSections[];
  customers: any[];
  tabContent: string;
  tabId: number = 0;
  tbbClass: string = '';
  CredentialsForm: Form[];
  CrdntlFormStatus: boolean;
  country: string[] = ["0", "0", "0"];
  countryModelChange(value: string[]) {
    this.country = value;
  }
  PersonalDataForm: Form[];
  PrsnlDtFormStatus: boolean;
  AddressForm: Form[];
  AddrssFormStatus: boolean;
  countries: string[];
  maxDate: Date = new Date();
  
  cityPattern = "^[^0-9]+$";
  namePattern: any = /^[^0-9]+$/;
  phonePattern: any = /^\+\s*7\s*\(\s*[02-9]\d{2}\)\s*\d{3}\s*-\s*\d{4}$/;
  phoneRules: any = {X: /[02-9]/}
  buttonText = "Start progress";
  inProgress = false;
  maxValue = 10;
  intervalId: number;
  password = "";
  passwordOptions: any = {mode: "password", value: this.password};

  constructor(private dataService: DataService) {
    this.customers = this.dataService.getCustomers();
    this.maxDate = new Date(this.maxDate.setFullYear(this.maxDate.getFullYear() - 21));
    this.countries = dataService.getCountries();
    this.CredentialsForm = dataService.getLogonForm();
    this.PersonalDataForm = dataService.getPersonalDataForm();
    this.AddressForm = dataService.getAddressForm();
  }

setCounter(num: number) {
  this.settabclass(this.num_tmp);
  this.settabclass(num);
  this.sections[num].tab_class += " tab-selected";
  this.num_tmp = num;
  this.act_tabIndex = num.toString();
}

enableTab(){
  this.sections[parseInt(this.act_tabIndex) + 1].tab_class = this.sections[parseInt(this.act_tabIndex) + 1].tab_class.replace("tab_disable", "");
}

settabclass(num: number){
  switch(num){
    case 0:{
      this.sections[num].tab_class = "tab_b";
      break;
    }
    case this.sections.length - 1:{
      this.sections[num].tab_class = "tab_e";
      break;
    }
    default:{
      this.sections[num].tab_class = "tab";
      break;
    }
  }
}

  ngOnInit() {
    this.sections = this.dataService.getSections();
    for (let i in this.sections){
      switch(parseInt(i)){
        case 0:{
          this.sections[i].tab_class = "tab-selected tab_b";
          break;
        }
        case this.sections.length - 1:{
          this.sections[i].tab_class = "tab_e tab_disable";
          break;
        }
        default:{
          this.sections[i].tab_class = "tab tab_disable";
          break;
        }
      }
    } 
  }

  AnswerController($scope){
    $scope.save = function (answer, answerForm){
        if(answerForm.$valid){
            // действия по сохранению
            alert(answer.author + ", ваш ответ сохранен");
        }
    };
  }

 /* passwordComparison = () => {
    return this.form.instance.option("formData").Password;
  };*/

  checkComparison() {
    return true;
  }

  onFormSubmit = function (e) {
  console.log(this.country);
  console.log(e);
  e.preventDefault();
  /*  if (parseInt(this.act_tabIndex) == 2){
    notify({
      message: "You have submitted the form",
      position: {
        my: "left botton",
        at: "left botton"
      }
    }, "success", 1000);
  }
    if (parseInt(this.act_tabIndex) != this.sections.length - 1){
      this.sections[parseInt(this.act_tabIndex) + 1].tab_class = this.sections[parseInt(this.act_tabIndex) + 1].tab_class.replace("tab_disable", "");
    }
    
    this.setCounter(parseInt(this.act_tabIndex) + 1);*/
  }
}
