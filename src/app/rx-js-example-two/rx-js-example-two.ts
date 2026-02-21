import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-rx-js-example-two',
  imports: [HttpClientModule,CommonModule,FormsModule],
  templateUrl: './rx-js-example-two.html',
  styleUrl: './rx-js-example-two.css',
})
export class RxJsExampleTwo implements OnInit {

  products: any[] = [];
  errorMessage: string = '';
  successMessage: string = '';

  newProduct = {
    title: '',
    body: ''
  };

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getProducts();
  }

  // GET PRODUCTS
  getProducts() {
    this.errorMessage = '';

    this.http.get<any[]>(this.apiUrl)
      .pipe(
        catchError(error => {
          this.errorMessage = "Error loading products!";
          return throwError(() => error);
        })
      )
      .subscribe(data => {
        this.products = data.slice(0, 5); // show only 5 products
      });
  }

  // ADD PRODUCT
  addProduct() {
    this.errorMessage = '';
    this.successMessage = '';

    this.http.post<any>(this.apiUrl, this.newProduct)
      .pipe(
        catchError(error => {
          this.errorMessage = "Error adding product!";
          return throwError(() => error);
        })
      )
      .subscribe(response => {

        // Since API is fake, manually push
        const productToAdd = {
          id: this.products.length + 1,
          ...this.newProduct
        };

        this.products.unshift(productToAdd);

        this.successMessage = "Product added successfully!";
        this.newProduct = { title: '', body: '' };
      });
  }
}
