import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {

 graficos: any = {
    'grafico1': {
      'labels': ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      'data':  [24, 30, 46],
      'type': 'doughnut',
      'leyenda': 'El pan se come con'
    },
    'grafico2': {
      'labels': ['Hombres', 'Mujeres'],
      'data':  [4500, 6000],
      'type': 'doughnut',
      'leyenda': 'Entrevistados'
    },
    'grafico3': {
      'labels': ['Si', 'No'],
      'data':  [95, 5],
      'type': 'doughnut',
      'leyenda': '¿Le dan gases los frijoles?'
    },
    'grafico4': {
      'labels': ['No', 'Si'],
      'data':  [85, 15],
      'type': 'doughnut',
      'leyenda': '¿Le importa que le den gases?'
    },
  };


    // Doughnut
  public ChartLabels: Label[] =  ['Con Frijoles', 'Con Natilla', 'Con tocino'];
  public ChartData: MultiDataSet = [  [24, 30, 46]];
  public Leyenda: string = 'El pan se come con';

      // Doughnut
  public ChartLabels2: Label[] =   ['Hombres', 'Mujeres'];
  public ChartData2: MultiDataSet = [ [4500, 6000]];
  public Leyenda2: string = 'Entrevistados';


       // Doughnut
  public ChartLabels3: Label[] =   ['Si', 'No'];
  public ChartData3: MultiDataSet = [ [95, 5]];
  public Leyenda3: string = '¿Le dan gases los frijoles?';

         // Doughnut
         public ChartLabels4: Label[] =   ['No', 'Si'];
         public ChartData4: MultiDataSet = [ [85, 15]];
         public Leyenda4: string = '¿Le importa que le den gases?';

  constructor() { }

  ngOnInit(): void {
  }

}
