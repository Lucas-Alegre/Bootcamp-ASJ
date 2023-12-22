import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeNumerosPrimos'
})
export class PipeNumerosPrimosPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return this.CantidadPrimos(value);
  }

  num: any = 0;

  x = 0;
  arrayAux: any = []
  CantidadPrimos(list: any) {
    for (let i = 0; i < list.length; i++) {
      if ((list[i] % list[i]) === 0 && list[i] % 2 === 1) {
        this.arrayAux.push(list[i])
      }
    }
    return this.arrayAux;
  }
}


