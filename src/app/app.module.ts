import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { IncomeComponent } from './components/income/income.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { ExpensesService } from './services/expenses.service';
import { IncomeService } from './services/income.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    IncomeComponent,
    ExpensesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ExpensesService,IncomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
