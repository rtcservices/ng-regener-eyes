import { Component, OnInit, inject } from '@angular/core';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-our-vision',
  standalone: true,
  imports: [],
  templateUrl: './our-vision.component.html',
  styleUrl: './our-vision.component.scss',
})
export class OurVisionComponent implements OnInit {
  private metaService = inject(MetaService);
  ngOnInit(): void {
    this.metaService.updateMeta({
      slug: 'our-vision',
      description:
        'Regener Eyes | Our Vision | Empowering individuals to take control of their vision health, enabling them to prioritize what truly matters in life is our vision.',
    });
  }
}