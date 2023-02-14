export class IncomeModel {
    text: string = '';
    incomeMount!: number;

    constructor(text:string,incomeMount:number){
        this.text = text
        this.incomeMount = incomeMount;
    }
}
