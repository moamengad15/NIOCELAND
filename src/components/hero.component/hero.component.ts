import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
items:{img:string,link:string,desc:string,authorlink:string}[] = [
  {
  img:"https://cdn.prod.website-files.com/5b47286ba09814724c5a5ff4/5b48e52333b04e520247608a_image-14.jpg",
  link:"Photography",
  desc:"Helmut Lang celebrates taxi drivers worldwide in latest campaign",
  authorlink:"Alessandra Ortiz"
},
{
  img:"https://cdn.prod.website-files.com/5b47286ba09814724c5a5ff4/5b48e443b9f372cb2a21aea7_image-13.jpg",
  link:"Photography",
  desc:"Bowlcut launch a new summer collection that pays homage to “UK legends",
  authorlink:"Rosanna"
},
{
  img:"https://cdn.prod.website-files.com/5b47286ba09814724c5a5ff4/5b48e3a5c575599d9ad83c1b_image-12.jpg",
  link:"Photography",
  desc:"Thousands of previously unseen photographs by Andy Warhol will be made public this Autumn",
  authorlink:"Annie Lueilwitz"
},
{
  img:"https://cdn.prod.website-files.com/5b47286ba09814724c5a5ff4/5b48e3149918eadd57ae153d_image-11.jpg",
  link:"Interactive Design",
  desc:"  London-based Yinka Ilori’s storytelling furniture",
  authorlink:"Annie Lueilwitz"
},
{
  img:"https://cdn.prod.website-files.com/5b47286ba09814724c5a5ff4/5b48de54b9f372bd1c21ab80_image-10.jpg",
  link:"Graphic Design",
  desc:"Anonymous Israeli art collective Broken Fingaz direct music video for U2 and Beck",
  authorlink:"Simeon Brekke"
},
{
  img:"https://cdn.prod.website-files.com/5b47286ba09814724c5a5ff4/5b48d4b28d2f84340af39762_image-9.jpg",
  link:"Architecture",
  desc:" Suzanne Saroff’s meticulously arranged photographs alter perceptions",
  authorlink:"Reta Torphy"
},
]
}
