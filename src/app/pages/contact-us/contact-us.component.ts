import { Component, OnInit, inject } from '@angular/core';
import { MetaService } from '../../services/meta.service';
import { InnerPageTitleComponent } from '../../components/inner-page-title/inner-page-title.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [InnerPageTitleComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent implements OnInit {
  private metaService = inject(MetaService);
  ngOnInit(): void {
    this.metaService.updateMeta({
      slug: 'contact-us',
      description:
        'Regener Eyes | Contact Us | The contact form for the website.',
    });
  }
}
