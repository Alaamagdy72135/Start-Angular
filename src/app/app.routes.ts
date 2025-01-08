import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent, pathMatch: 'full', title: 'Home'},
    {path: 'about', component: AboutComponent, pathMatch: 'full', title: 'About'},
    {path: 'contact', component: ContactComponent, pathMatch: 'full', title: 'Contact'},
    {path: 'portfolio', component: PortfolioComponent, pathMatch: 'full', title: 'Portfolio'},
    {path: '', component: HomeComponent, pathMatch: 'full',title: 'Home'},
    {path: '**', component: NotFoundComponent, pathMatch: 'full',title: '404'},
];
