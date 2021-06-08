import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js'; 
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {
  @Input('title') titulo:string ='Default title';
  @Input('data') datos:any[] =[];
  @Input('labels') labels:any[] =[]; 
  

  public colors:Color[] = [
    {backgroundColor:['#6857E6', '#009fee', '#f02059']}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
