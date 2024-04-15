import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const PAGE_ROUTES: Route[] = [
  {
    path: '',
    children: [
      { path: '', component: HomeComponent, title: 'Home' },
      { path: 'about', component: AboutUsComponent, title: 'About Us' },
      { path: 'contact', component: ContactUsComponent, title: 'Contact Us' },
    ],
  },
];
