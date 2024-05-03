import { Component, OnInit, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MailService } from '../../services/mail.service';
import { MetaService } from '../../services/meta.service';
import { InnerPageTitleComponent } from '../../components/inner-page-title/inner-page-title.component';
import { ContactModel } from '../../models/contact-model';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [InnerPageTitleComponent, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent implements OnInit {
  private metaService = inject(MetaService);
  private mailService = inject(MailService);
  private page = inject(PageService);

  private model!: ContactModel;
  ngOnInit(): void {
    this.metaService.updateMeta({
      slug: 'contact-us',
      description:
        'Regener Eyes | Contact Us | The contact form for the website.',
    });
  }

  onSubmit(f: NgForm) {
    console.log(f.valid);
    if (f.valid) {
      this.model = {
        name: f.value.username,
        email: f.value.useremail,
        phone: f.value.userphone,
        title: f.value.messagetitle,
        message: f.value.message,
      };

      this.mailService.sendMail(this.model);
    } else {
      alert('Please fill all required fields');
    }
  }
}
