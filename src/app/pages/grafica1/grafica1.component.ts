import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {
  
  public datos:any[] = [
    [350, 450, 100]
  ];

  public labels:string[] = ['Download Sales'];

  public datos1:any[] = [
    [200, 150, 50]
  ];

  public labels1:string[] = ['Suministros de equipos', 'Sumistro de alimientos', 'Suministro de componentes'];

  constructor() { }

  ngOnInit(): void {
  }

}
