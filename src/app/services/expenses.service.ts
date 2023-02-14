import { Injectable } from '@angular/core';
import { ExpensesModel } from '../models/expenses.model';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  Egresos: ExpensesModel[] = [
    new ExpensesModel('Departamento', 3000),
    new ExpensesModel('Matilda', 100),
  ];

  createEgresos(text: string, expensesMount: number) {
    let NewExpense = new ExpensesModel(text, expensesMount);
    this.Egresos.push(NewExpense);
  }

  deleteEgreso(element: ExpensesModel) {
    this.Egresos.forEach((value, index) => {
      if (value === element) {
        this.Egresos.splice(index, 1);
      }
    });
  }

  ReturnEgresolength(){
    return this.Egresos.length
  }
}
