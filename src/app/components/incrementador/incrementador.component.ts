import { Component, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

 @Input('progreso') porcentaje = 50;
 @Input('texto') leyenda = 'Leyenda';
 @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
            console.log('leyenda', this.leyenda);
            console.log('progreso', this.porcentaje);
}

  ngOnInit(): void {
  }


  onChange(newValue: number) {
    console.log(newValue);
    if (newValue >= 100) {
      this.porcentaje = 100;
    } else if (newValue <= 0) {
      this.porcentaje = 0; } else { this.porcentaje = newValue; }

      //let elementHTML:any = document.getElementsByName('progreso')[0];


     // elementHTML.value = Number(this.porcentaje);

      this.txtProgress.nativeElement.value = this.porcentaje;

    this.cambioValor.emit(this.porcentaje);


    }


  cambiarvalor(valor) {


    if (this.porcentaje >= 100  && valor > 0) {this.porcentaje = 100; return; }
    if( this.porcentaje <= 0 && valor < 0 ) {
       this.porcentaje = 0; return;
      }

    this.porcentaje += valor;
    console.log(this.porcentaje);



    this.cambioValor.emit(this.porcentaje);
    this.txtProgress.nativeElement.focus();

  }



}

