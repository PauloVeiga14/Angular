import { TemplateService } from './../template.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private templateService: TemplateService) { }

  ngOnInit(): void {
  }

  homeClick(): void {
    this.templateService.homeClick();
  }

  productsClick(): void {
    this.templateService.productsClick();
  }

}
