import { Component } from '@angular/core';
import { ExpensesService } from './services/expenses.service';
import { IncomeService } from './services/income.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SistemaDePresupuesto';
  Ingreso = this.incomeService.Ingreso;
  Egresos = this.expensesService.Egresos;

  constructor(private incomeService: IncomeService, private expensesService: ExpensesService){}

  getTotalIncomeMount(){
    let IngresosTotales: number = 0;
    this.Ingreso.forEach(ingreso => {
      IngresosTotales += ingreso.incomeMount;
    })
    return IngresosTotales
  }

  getTotalExpensesMount(){
    let EgresosTotales: number = 0;
    this.Egresos.forEach(egreso => {
      EgresosTotales += egreso.expensesMount;
    })
    return EgresosTotales
  }

  getTotalBudget(){
    return this.getTotalIncomeMount() - this.getTotalExpensesMount()
  }
  
  ReturnIngresolength(){
    return this.Ingreso.length
  }

  ReturnEgresoLength(){
    return this.Egresos.length
  }

  
}
