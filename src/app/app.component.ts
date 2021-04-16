import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  name = 'Angular';

  constructor(private translateService: TranslateService) {
    translateService.addLangs(['en', 'de']);
    translateService.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translateService.use(language);
  }
}