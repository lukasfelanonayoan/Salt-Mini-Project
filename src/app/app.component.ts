import { Component } from '@angular/core';
import { DataDummy, MENU } from './data/data-dummy';

import { faTwitter, faLinkedin, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'salt-project';
  imgUpload = faArrowUp;
  imgFind = faSearch;
  imgProfile = faUser;
  menu = MENU.menuHeader;

  dataVideo = DataDummy.dataVideo;
  dataPeople = DataDummy.dataPeople;
  dataDocument = DataDummy.dataDocument;
  dataActivity = DataDummy.dataActivity;
  dataChannel = DataDummy.dataChannel;
  linkSocial = [
    faTwitter,
    faLinkedin,
    faFacebookF
  ]
  menuFooter = MENU.menuFooter;
}
