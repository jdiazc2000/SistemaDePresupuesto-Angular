export class ExpensesModel {
    text: string = '';
    expensesMount!: number;

    constructor(text:string,expensesMount:number){
        this.text = text
        this.expensesMount = expensesMount;
    }
}
