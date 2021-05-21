import { Component, Input } from '@angular/core';
import domtoimage from 'dom-to-image';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.page.html',
  styleUrls: ['modal.page.scss']
})
export class ModalPage {
  @Input() resultado: string;

  constructor(private socialSharing: SocialSharing) { }

  compartilhar() {
    const div = document.getElementById("shareImage");
    const options1 = { background: 'white', height: div.offsetHeight, width: div.clientWidth };
    domtoimage.toPng(div, options1).then((dataUrl: any) => {
      this.socialSharing.shareViaWhatsApp('', dataUrl, null).then(() => {
        // Success!
      }).catch(() => {
        // Error!
      });
    });
  }
}
