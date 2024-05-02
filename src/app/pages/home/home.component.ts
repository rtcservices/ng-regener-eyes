import { NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MetaService } from '../../services/meta.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private metaService = inject(MetaService);
  ngOnInit(): void {
    this.metaService.updateMeta({
      slug: '',
      description:
        'We leverage advanced technology to empower individuals to take control of their vision health, enabling them to prioritize what truly matters in life. Our user-friendly devices and services seamlessly integrate into everyday life, supporting improved results in managing vision health. ',
    });
  }
}
