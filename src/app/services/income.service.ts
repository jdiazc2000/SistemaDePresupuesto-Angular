import { Injectable } from '@angular/core';
import { IncomeModel } from '../models/income.model';

@Injectable({
  providedIn: 'root',
})
export class IncomeService {
  Ingreso: IncomeModel[] = [
    new IncomeModel('Salario', 4000),
    new IncomeModel('Venta coche', 5000),
  ];

  createIngresos(text: string, incomeMount: number) {
    let NewIncome = new IncomeModel(text, incomeMount);
    this.Ingreso.push(NewIncome);
  }

  deleteEgreso(element: IncomeModel) {
    this.Ingreso.forEach((value, index) => {
      if (value === element) {
        this.Ingreso.splice(index, 1);
      }
    });
  }

  ReturnIngresolength(){
    return this.Ingreso.length
  }
}
