import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: string | null = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.productService.readById(id).subscribe(product => {
        this.product = product; 
      })}
  }

  deleteProduct(): void {
    let id: string | null = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.productService.delete(id).subscribe(() => {
        this.productService.showMessage('Produto deletado com sucesso!');
        this.router.navigate(['/products']);
      })};
    }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}  