import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini Calculadora';
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;
  resultado2: string ="";

  sumar(event:Event):void{
      this.resultado = this.numero1 + this.numero2
  }
  restar(event:Event):void{
      this.resultado = this.numero1 - this.numero2
  }
  multiplicar(event:Event):void{
    this.resultado = this.numero1 * this.numero2
  }
  dividir(event:Event):void{
    if(this.numero2>0){
      this.resultado = this.numero1 / this.numero2;
    }else{
      this.resultado2 = "No se puede dividir por cero o menor de cero";
      
    }
    
  }

}
