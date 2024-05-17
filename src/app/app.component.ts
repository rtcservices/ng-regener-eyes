import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { AsyncPipe, DOCUMENT, ViewportScroller } from '@angular/common';
import { Observable, fromEvent, map } from 'rxjs';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { ToastsContainer } from './helpers/toast';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ScrollToTopComponent,
    ToastsContainer,
    LoaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private readonly document = inject(DOCUMENT);
  private readonly viewport = inject(ViewportScroller);
 public loaderService = inject(LoaderService)
  readonly showScroll$: Observable<boolean> = fromEvent(
    this.document,
    'scroll'
  ).pipe(map(() => this.viewport.getScrollPosition()?.[1] > 0));

  onScrollToTop(): void {
    this.viewport.scrollToPosition([0, 0]);
  }
}
