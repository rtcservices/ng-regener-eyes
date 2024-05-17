import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MailService } from '../../services/mail.service';
import { MetaService } from '../../services/meta.service';
import { InnerPageTitleComponent } from '../../components/inner-page-title/inner-page-title.component';
import { ContactModel } from '../../models/contact-model';
import { PageService } from '../../services/page.service';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { ToastService } from '../../services/toast.service';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { NgTemplateOutlet } from '@angular/common';


@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [InnerPageTitleComponent, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContactUsComponent implements OnInit {
  private metaService = inject(MetaService);
  private mailService = inject(MailService);
  private page = inject(PageService);
  public toast = inject(ToastService);
  private model!: ContactModel;
  ngOnInit(): void {
    this.metaService.updateMeta({
      slug: 'contact-us',
      description:
        'Regener Eyes | Contact Us | The contact form for the website.',
    });
  }

  public sendEmail(e: Event,f:any) {
    emailjs
      .sendForm('service_e7me0ep', 'template_xo38wtx', e.target as HTMLFormElement, {
        publicKey: 'Vie5TSh5xDUKqwJUk',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          this.toast.show('Thank you for contacting, we will contact you!',{ classname: 'bg-success text-light', delay: 10000 })
         f.reset()
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
          this.toast.show('Error Occoured, Please try again!',{ classname: 'bg-danger text-light', delay: 10000 })
          
        },
      );
  }

}
