import { Component, OnInit, inject } from '@angular/core';
import { MetaService } from '../../services/meta.service';
import { InnerPageTitleComponent } from '../../components/inner-page-title/inner-page-title.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [InnerPageTitleComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent implements OnInit {
  private metaService = inject(MetaService);
  ngOnInit(): void {
    this.metaService.updateMeta({
      slug: 'about-us',
      description:
        'Regener Eyes | About Us | Empowering individuals to take control of their vision health, enabling them to prioritize what truly matters in life is About Us.',
    });
  }
}
