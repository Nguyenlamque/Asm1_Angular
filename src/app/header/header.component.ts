import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MenuNavbar } from '../interface/Imenu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
menus:MenuNavbar[] = [
  {
   id:1,
   name:"Home",
   url:"/",
   parent: 1
  },
  {
    id:2,
    name:"Product",
    url:"/",
    parent: 1
   },
   {
    id:3,
    name:"Contact",
    url:"/",
    parent: 1
   },
   {
    id:4,
    name:"About Us",
    url:"/",
    parent: 1
   },
   {
    id:5,
    name:"Infor",
    url:"/",
    parent: 1
   }

]
}
