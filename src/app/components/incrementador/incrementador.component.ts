import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  
  @Input('valor') progreso=10; 
  @Input() btnClass:string ="btn-primary";
  
  @Output('valor') salida: EventEmitter<number> = new EventEmitter();
  
  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

  // get getProgress(){
  //   return `${this.progreso}%`; 
  // } 

  cambiarValor(valor:number){
    if (this.progreso<=0 && valor<0){
      this.salida.emit(0);
      this.progreso=0;
      return;
    }
    if (this.progreso>=100 && valor>=0){
      this.salida.emit(100);
      this.progreso=100;
      return;
    }
    this.progreso= this.progreso+valor;
    this.salida.emit(this.progreso);
  }

  change(nuevoValor:number){
    if (nuevoValor>100){
      this.progreso=100;
    }else if(nuevoValor<=0){
      this.progreso=0;
    }else{
      this.progreso=nuevoValor;
      this.salida.emit(this.progreso);
    }
  }

}
