import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
items:{img:string,link:string,desc:string,authorlink:string}[] = [
  
  {
  img:"https://cdn.prod.website-files.com/5b47286ba09814724c5a5ff4/5b472cc1731aa11ef4a6482f_image_large-p-1600.jpeg",
  link:"Graphic Design",
  desc:"A Brief History of the FIFA World Cup Logo",
  authorlink:"By Clem Onojeghuo"
},
  {
  img:"https://cdn.prod.website-files.com/5b47286ba09814724c5a5ff4/5b47310949f3e1fdefa251cd_image-1-p-1600.jpeg",
  link:"Photography",
  desc:"Fred Rowson directs film for Years and Years",
  authorlink:"By Coby Gottlieb"
},
{
  img:"https://cdn.prod.website-files.com/5b47286ba09814724c5a5ff4/5b473124a0981400825a6a48_image-2-p-1600.jpeg",
  link:"Photography",
  desc:"Bowlcut launch a new summer collection that pays homage to “UK legends",
  authorlink:" By Rosanna"
},
{
  img:"https://cdn.prod.website-files.com/5b47286ba09814724c5a5ff4/5b48e3a5c575599d9ad83c1b_image-12.jpg",
  link:"Illustration",
  desc:"M&C Saatchi and Fontsmith collaborate on font collection for House of St Barnabas",
  authorlink:"By Annie Lueilwitz"
},
]
}
