import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { DetailProductComponent } from './detail-product/detail-product.component';

export const routes: Routes = [
    {path: "" , component: ContentComponent},
    {path: "detai-product/:id" , component: DetailProductComponent},

];
