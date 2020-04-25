import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.css']
})
export class GraficoDonaComponent implements OnInit {

      // Doughnut
      @Input() public ChartLabels: Label[] = [];
      @Input() public ChartData: MultiDataSet = [ ];
      @Input() public Leyenda = ' ';
      public ChartType: ChartType = 'doughnut';


  constructor() { }

  ngOnInit(): void {



  }

}
