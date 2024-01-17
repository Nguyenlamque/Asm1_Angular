import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.css'
})
export class DetailProductComponent {
  product:any;
  constructor(private routes: ActivatedRoute){
  }
  httpClient = inject(HttpClient);
  ngOnInit(){
    let id = this.routes.snapshot.paramMap.get('id');
 
    this.getDetailProductById(Number(id));
  }
  getDetailProductById(id:number){
    // console.log(id);  
    this.httpClient.get(`https://dummyjson.com/products/${id}`)
    .subscribe((response:any)=>{
        console.log(response);
        this.product = response;
    })  
  }

}
