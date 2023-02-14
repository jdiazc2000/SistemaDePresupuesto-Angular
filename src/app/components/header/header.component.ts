import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  @Input() TotalIncome: number = 0
  @Input() TotalExpenses: number = 0
  @Input() AvalPres: number = 0
}
