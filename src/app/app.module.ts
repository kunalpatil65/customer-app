import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'
import { HelloComponent } from './hello.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, RouterModule ],
  declarations: [ AppComponent, HelloComponent, CreateEmployeeComponent, ListEmployeeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
