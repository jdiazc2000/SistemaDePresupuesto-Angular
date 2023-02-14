import { Component, Input, OnInit } from '@angular/core';
import { IncomeModel } from 'src/app/models/income.model';
import { IncomeService } from 'src/app/services/income.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css'],
  providers: []
})
export class IncomeComponent{
  Ingresos: IncomeModel[] = this.incomeService.Ingreso;
  @Input() ActualIncLength!: number;

  constructor(public incomeService: IncomeService){}

  DeleteIncome(income:IncomeModel){
    console.log(this.ActualIncLength)
    this.incomeService.deleteEgreso(income);
  }
}
