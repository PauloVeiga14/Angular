import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  
  localization = {
    icon: '',
    page: '',
  }

  constructor() { }

  homeClick(): void {
    this.localization.icon = 'home';
    this.localization.page = 'Início';
    console.log(this.localization);
  }

  productsClick(): void {
    this.localization.icon = 'storefront';
    this.localization.page = 'Produtos';
    console.log(this.localization);
  }
}
