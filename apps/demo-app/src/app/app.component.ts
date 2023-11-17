import { AfterViewInit, Component } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { BsnDirective } from 'ngx-bsn';
import { ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import typescript from 'highlight.js/lib/languages/typescript';

@Component({
  standalone: true,
  imports: [FontAwesomeModule, BsnDirective, ReactiveFormsModule],
  selector: 'ngx-bsn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  readonly bsn = new UntypedFormControl(null);
  constructor(readonly library: FaIconLibrary) {
    hljs.registerLanguage('html', xml);
    hljs.registerLanguage('typescript', typescript);
    library.addIcons(faIdCard, faGithub);
  }

  ngAfterViewInit(): void {
    hljs.highlightAll();
  }
}
