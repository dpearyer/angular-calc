import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-calculator';

  calValue: number=0;
  functionT: any = 'Nofunction';

  calNumber:string='noValue';//variable to check if there are any numbers in the screen

  firstNumber: number=0
  secondNumber: number=0

  onClickValue (val:string, type:any){
    if(type=='number'){
      this.onNumberClick(val);
    }
    else if(type=='function'){
      this.onFunctionClick(val);
    }
  }
//adds numbers to screen
  onNumberClick(val:string){
    if(this.calNumber != 'noValue'){
      this.calNumber = this.calNumber +val;//concatinating the numbers clicked
    }
    else{
      this.calNumber =val;
    }
    this.calValue = parseFloat(this.calNumber);

  }

  onFunctionClick(val:string){
    //call clear sign method
    if(val='C'){
      this.clearSign();
    }


    else if(this.functionT=='Nofunction'){
      this.firstNumber = this.calValue;
      this.calValue=0;
      this.calNumber='noValue';
      this.functionT=val;

    }
    else if(this.functionT != 'Nofunction'){
      this.secondNumber=this.calValue;
      //calculation
      this.valueCalc(val);

    }
  }
  valueCalc(val:string){
    if(this.functionT=='+'){
      const Sum= this.firstNumber + this.secondNumber
      this.totalAssignValues(Sum, val)
      if(val== '='){
        this.onEqualSign()
      }
    }
    if(this.functionT=='-'){
      const Sum= this.firstNumber - this.secondNumber
      this.totalAssignValues(Sum, val)
      if(val== '='){
        this.onEqualSign()
      }
    }
    if(this.functionT=='x'){
      const Sum= this.firstNumber * this.secondNumber
      this.totalAssignValues(Sum, val)
      if(val== '='){
        this.onEqualSign()
      }
    }
    if(this.functionT=='/'){
      const Sum= this.firstNumber/this.secondNumber
      this.totalAssignValues(Sum, val)
      if(val== '='){
        this.onEqualSign()
      }
    }
    if(this.functionT=='%'){
      const Sum= this.firstNumber%this.secondNumber
      this.totalAssignValues(Sum, val)
      if(val== '='){
        this.onEqualSign()
      }
    }
  }

  totalAssignValues(Sum: number, val:string){
    this.calValue=Sum;
    this.firstNumber=Sum;
    this.secondNumber=0;
    this.calNumber='noValue';
    this.functionT=val;
    
  }

  onEqualSign(){
    this.firstNumber=0
    this.secondNumber=0
    this.functionT='Nofunction'
    this.calNumber='noValue'
  }

  clearSign(){
    this.firstNumber=0
    this.secondNumber=0
    this.calValue=0
    this.functionT='Nofunction'
    this.calNumber='noValue'
  }
}

