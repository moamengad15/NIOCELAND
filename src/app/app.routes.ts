import { Routes } from '@angular/router';
import { LatestComponent } from '../components/latest.component/latest.component';
import { HomeComponent } from '../components/home.component/home.component';
import { AboutComponent } from '../components/about.component/about.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo:'/home' , pathMatch:"full"},
    { path: 'latest', component: LatestComponent },
    {path:'about',component:AboutComponent},
];

