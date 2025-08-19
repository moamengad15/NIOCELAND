import {  signal } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { NavbarComponent } from "../components/navbar.component/navbar.component";
import { HeroComponent } from "../components/hero.component/hero.component";
import { AboutComponent } from "../components/about.component/about.component";
import { FeaturesComponent } from '../components/features.component/features.component';
import { FooterComponent } from '../components/footer.component/footer.component';
import { LatestComponent } from "../components/latest.component/latest.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HeroComponent, AboutComponent, FeaturesComponent, FooterComponent, LatestComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  // template: `
  //   <div style="margin-top: 500px"> <!-- محتوى بعد الناف بار -->
  //     <!-- باقي الصفحة -->
  //   </div>
  // `,
})
export class App implements OnInit {
  protected readonly title = signal('notable');
    ngOnInit() {
    AOS.init();
  }
}
