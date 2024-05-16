import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const PAGE_ROUTES: Route[] = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
        title:
          'Vision Enhanced = Life Renewed | Empowering and enabling people with vision deficits through development of innovative solutions',
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
        title: 'About Us',
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
        title: 'Contact Us',
      },
    ],
  },
];
