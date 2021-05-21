import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-tab-question',
  templateUrl: 'tab-question.page.html',
  styleUrls: ['tab-question.page.scss']
})
export class TabQuestionPage {
  resultado: string = null;
  sintomas: any = {
    febre: 0,
    tosse: 0,
    coriza: 0,
    cansaco: 0,
    cabeca: 0,
    respirar: 0,
  };

  constructor(public modalController: ModalController) { }

  async diagnostico() {
    var soma = parseInt(this.sintomas.febre) + parseInt(this.sintomas.tosse) + parseInt(this.sintomas.coriza) + parseInt(this.sintomas.cansaco) + parseInt(this.sintomas.cabeca) + parseInt(this.sintomas.respirar);
    if (parseInt(this.sintomas.respirar)) {
      this.resultado = 'COVID-19';
    } else if (soma > 1) {
      this.resultado = 'GRIPE';
    } else if (soma = 1) {
      this.resultado = 'RESFRIADO';
    } else {
      this.resultado = 'SEM SIMTOMAS';
    }

    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'resultado': this.resultado
      }
    });
    return await modal.present();
  }

  refazer() {
    this.resultado = null;
    this.sintomas = {
      febre: 0,
      tosse: 0,
      coriza: 0,
      cansaco: 0,
      cabeca: 0,
      respirar: 0,
    };
  }
}
