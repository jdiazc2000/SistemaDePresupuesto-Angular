import { Component, Input } from '@angular/core';
import { ExpensesModel } from 'src/app/models/expenses.model';
import { ExpensesService } from 'src/app/services/expenses.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent {
  Egresos:ExpensesModel[] = this.expensesService.Egresos;
  @Input() ActualExpLength!: number

  constructor(private expensesService: ExpensesService){}

  
  DeleteExpense(expenses:ExpensesModel){
    console.log(this.ActualExpLength)
    this.expensesService.deleteEgreso(expenses)
  }
}
