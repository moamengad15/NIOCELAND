import { Component } from '@angular/core';
import { HeroComponent } from "../hero.component/hero.component";
import { AboutComponent } from "../about.component/about.component";
import { LatestComponent } from "../latest.component/latest.component";
import { FeaturesComponent } from "../features.component/features.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, AboutComponent, LatestComponent, FeaturesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
items:{img:string,link:string,desc:string,authorlink:string}[] = [
  
  {
  img:"https://cdn.prod.website-files.com/5b47286ba09814724c5a5ff4/5b48e5a3c57559300cd83d22_image-15-p-1600.jpeg",
  link:"Illustration",
  desc:"Japan House opens in mountainside to foster peak creativity.",
  authorlink:"By Reta Torphy"
},
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
{
  img:"https://cdn.prod.website-files.com/5b47286ba09814724c5a5ff4/5b48d429b9d114110eb233dd_image-8-p-1600.jpeg",
  link:"Graphic Design",
  desc:" Anu Ambasna’s playful illustrations celebrate club culture, brown bodies and perfect paunches",
  authorlink:"ByLeo Bartell"
},

]
}
