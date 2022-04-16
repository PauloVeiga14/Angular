import { TemplateService } from './../../template.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.ts.component.html',
  styleUrls: ['./header.component.ts.component.css']
})
export class HeaderComponent implements OnInit {

  localization = {
    icon: 'home',
    page: 'Início',
  }

  constructor( private templateService: TemplateService) { }

  ngOnInit(): void {
  }

  logoClick(): void {
    this.templateService.homeClick();
    this.localization.icon = this.templateService.localization.icon;
    this.localization.page = this.templateService.localization.page;
  }

}
