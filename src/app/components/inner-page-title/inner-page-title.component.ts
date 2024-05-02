import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inner-page-title',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inner-page-title.component.html',
  styleUrl: './inner-page-title.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InnerPageTitleComponent {
  @Input() pageTitle = '';
}
