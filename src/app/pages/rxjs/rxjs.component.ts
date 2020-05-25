import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import {retry, map , filter } from 'rxjs/operators';
import { error } from 'protractor';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit , OnDestroy {

  subscription: Subscription;

  constructor() {


 this.subscription =   this.regresarObservable().pipe(retry(5))
    .subscribe(
        numero => console.log('Subs', numero) ,
        error => console.log('observador terminado', error),
        () => console.log('observador terminado')
        );
  }

  ngOnInit(): void {
  }


  regresarObservable(): Observable<any>{

    return new Observable((observer: Subscriber<any>) => {

      let contador = 0;

      let intervalo = setInterval( () =>{

          contador += 1;

          const salida = {
            valor: contador
          }



          observer.next(salida);


        //  if(contador === 2){

           // clearInterval(intervalo);
          //  observer.complete();

          //}

      }, 1000);


    }).pipe(
      map( resp =>  resp.valor),
      filter( (valor, index) => {
          console.log('Filter', valor, index);
          if(valor%2 ===1){return true;}
          else {return false;}
      })
    );





  }

  ngOnDestroy(){
    console.log('la pagina se va cerrar');
    this.subscription.unsubscribe();


  }

}
