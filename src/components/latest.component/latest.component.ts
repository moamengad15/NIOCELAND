import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-latest',
  imports: [CommonModule],
  templateUrl: './latest.component.html',
  styleUrl: './latest.component.css'
})
export class LatestComponent implements OnInit {
constructor(private router :Router){}  
   @Input() items: { img: string, link: string, desc: string, authorlink: string }[] = []

   currentUrl :string = ''
  ngOnInit(): void {
    this.currentUrl = this.router.url    
    this.router.events.subscribe(() => {
    this.currentUrl = this.router.url
    });


  if(this.router.url=='/latest'){            
  this.items = [
    ...this.items, 
    {
      img: "https://cdn.prod.website-files.com/5b47286ba09814724c5a5ff4/5b48e5a3c57559300cd83d22_image-15-p-1600.jpeg",
      link: "Illustration",
      desc: "Japan House opens in mountainside to foster peak creativity.",
      authorlink: " By Reta Torphy"
    },
  {
  img:"https://cdn.prod.website-files.com/5b47286ba09814724c5a5ff4/5b48e52333b04e520247608a_image-14-p-1600.jpeg",
  link:"Photography",
  desc:"Helmut Lang celebrates taxi drivers worldwide in latest campaign",
  authorlink:"By Alessandra Ortiz"
},
{
  img:"https://cdn.prod.website-files.com/5b47286ba09814724c5a5ff4/5b48e443b9f372cb2a21aea7_image-13.jpg",
  link:"Photography",
  desc:"Bowlcut launch a new summer collection that pays homage to “UK legends",
  authorlink:"By Rosanna"
},
{
  img:"https://cdn.prod.website-files.com/5b47286ba09814724c5a5ff4/5b48e3a5c575599d9ad83c1b_image-12.jpg",
  link:"Photography",
  desc:"Thousands of previously unseen photographs by Andy Warhol will be made public this Autumn",
  authorlink:"By Annie Lueilwitz"
},
{
  img:"https://cdn.prod.website-files.com/5b47286ba09814724c5a5ff4/5b48e3149918eadd57ae153d_image-11.jpg",
  link:"Interactive Design",
  desc:"  London-based Yinka Ilori’s storytelling furniture",
  authorlink:" By Annie Lueilwitz"
},
{
  img:"https://cdn.prod.website-files.com/5b47286ba09814724c5a5ff4/5b48de54b9f372bd1c21ab80_image-10.jpg",
  link:"Graphic Design",
  desc:"Anonymous Israeli art collective Broken Fingaz direct music video for U2 and Beck",
  authorlink:"By Simeon Brekke"
},
{
  img:"https://cdn.prod.website-files.com/5b47286ba09814724c5a5ff4/5b48d4b28d2f84340af39762_image-9.jpg",
  link:"Architecture",
  desc:" Suzanne Saroff’s meticulously arranged photographs alter perceptions",
  authorlink:"By Reta Torphy"
},
{
  img:"https://cdn.prod.website-files.com/5b47286ba09814724c5a5ff4/5b48d429b9d114110eb233dd_image-8-p-1600.jpeg",
  link:"Graphic Design",
  desc:" Anu Ambasna’s playful illustrations celebrate club culture, brown bodies and perfect paunches",
  authorlink:"By Leo Bartell"
},

{
  img:"https://cdn.prod.website-files.com/5b47286ba09814724c5a5ff4/5b47322876d89cde905d9ed7_image-7-p-1080.jpeg",
  link:"Interactive Design",
  desc:" Rudy Guedj’s design work sits between “figurative motives and their abstracted representations”",
  authorlink:"By Simeon Peterson"
},
{
  img:"https://cdn.prod.website-files.com/5b47286ba09814724c5a5ff4/5b4731bb49f3e1eb1ea25217_image-6-p-800.jpeg",
  link:"Interactive Design",
  desc:" How Alex Prager made the world stop and stare",
  authorlink:"By Michal Legros"
},
{
  img:"https://cdn.prod.website-files.com/5b47286ba09814724c5a5ff4/5b47318976d89c75685d9e4f_image-5-p-500.jpeg",
  link:"Animation",
  desc:" New platform Holdframe offers animators’ full project files for others to download and explore",
  authorlink:"By Simeon Brekke"
},
{
  img:"https://cdn.prod.website-files.com/5b47286ba09814724c5a5ff4/5b473165731aa1da7ba64db7_image-4-p-1080.jpeg",
  link:"Miscellaneous",
  desc:" No balls, all books: it’s July Things!",
  authorlink:"By Rosanna Ondricka"
},
{
  img:"https://cdn.prod.website-files.com/5b47286ba09814724c5a5ff4/5b47313c49f3e112b8a251e3_image-3-p-1600.jpeg",
  link:" Illustration",
  desc:" M&C Saatchi and Fontsmith collaborate on font collection for House of St Barnabas",
  authorlink:"By Annie Lueilwitz",
},
{
  img:"https://cdn.prod.website-files.com/5b47286ba09814724c5a5ff4/5b473124a0981400825a6a48_image-2-p-1600.jpeg",
  link:"Photography",
  desc:" Fred Rowson directs film for Years and Years",
  authorlink:"By Coby Gottlieb",
},
{
  img:"https://cdn.prod.website-files.com/5b47286ba09814724c5a5ff4/5b47310949f3e1fdefa251cd_image-1-p-1600.jpeg",
  link:"Graphic Design",
  desc:" Need a guide to LA’s graphic design scene? Shoplifters’ new issue has got your back",
  authorlink:"By Alessandra Ortiz"
},
{
  img:"https://cdn.prod.website-files.com/5b47286ba09814724c5a5ff4/5b472cc1731aa11ef4a6482f_image_large-p-1600.jpeg",
  link:"ByClem Onojeghuo",
  desc:" A Brief History of the FIFA World Cup Logo",
  authorlink:"By Clem Onojeghuo"
},
  ];
      }
  
    

  

}


  }
 

