// Esse é um exemplo de diretiva estrutural

import { Directive } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective {

  constructor() {
    console.log('myFor')
   }

}
