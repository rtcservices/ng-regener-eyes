import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurVisionComponent } from './our-vision/our-vision.component';
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
        path: 'our-vision',
        component: OurVisionComponent,
        title: 'Our Vision',
      },
      { path: 'contact', component: ContactUsComponent, title: 'Contact Us' },
    ],
  },
];
