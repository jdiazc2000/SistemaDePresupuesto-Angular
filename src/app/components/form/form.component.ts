import { Component } from '@angular/core';
import { ExpensesService } from 'src/app/services/expenses.service';
import { IncomeService } from 'src/app/services/income.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private incomeService: IncomeService, private expensesService: ExpensesService){}

  options:[{name: string, value:string},
           {name: string, value:string}] = [
    {
      name: "Ingreso +",
      value: '+'
    },
    {
      name: "Egreso -",
      value: '-'
    }
  ]

  text:string = ''
  mount:number = 0 
  type!:string

  sendData(){
    this.type === '+' ?  this.incomeService.createIngresos(this.text,this.mount) : this.expensesService.createEgresos(this.text,this.mount)
  }
}
