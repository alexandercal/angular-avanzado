import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css']
})
export class ProgressComponent implements OnInit {

  progreso1:number=0;
  progreso2:number=0;

  get getProgress1(){
    return `${this.progreso1}%`;
  }

  get getProgress2(){
    return `${this.progreso2}%`;
  }

  asignar(valor:number){
    this.progreso1=valor;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
