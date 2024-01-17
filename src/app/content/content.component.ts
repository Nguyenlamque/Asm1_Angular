import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
products :any;
httpClient = inject(HttpClient)
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.getProducts()
}
getProducts(){
  this.httpClient.get('https://dummyjson.com/products')
  .subscribe((response:any) =>{
    this.products = response.products
  })
}
}