import { Component, ViewChild, ElementRef } from '@angular/core';
import { CovidService } from '../providers/covid.service';
import { CovidModel } from '../models/covid.model';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-tab-data',
  templateUrl: 'tab-data.page.html',
  styleUrls: ['tab-data.page.scss'],
  providers: [CovidService]
})
export class TabDataPage {
  @ViewChild('barCanvas', { static: true }) private barCanvas: ElementRef;
  barChart: any;
  labels: Array<string[]> = new Array<string[]>();
  data: Array<number> = new Array<number>();
  color: Array<string> = new Array<string>();

  constructor(private covidService: CovidService) { }

  ionViewDidEnter() {
    this.labels = new Array<string[]>();
    this.data = new Array<number>();
    this.color = new Array<string>();
    this.covidService.getAll().subscribe((data: Array<CovidModel>) => {
      for (let d of data) {
        this.labels.push([d.nm_descricao_tp_leito, d.nm_local]);
        this.data.push(Math.floor(d.lotacao));
        this.color.push(this.dynamicColors())
      }
      this.barChartMethod();
    });
  }

  dynamicColors() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgba(" + r + "," + g + "," + b + ", 0.5)";
  }

  barChartMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'horizontalBar',
      data: {
        labels: this.labels,
        datasets: [{
          label: 'Percentual ocupação',
          data: this.data,
          backgroundColor: this.color,
          borderColor: this.color,
          borderWidth: 1
        }]
      },
      options: {
        animation: { duration: 0 },
        scales: {
          yAxes: [{
            ticks: {
              fontSize: 8
            }
          }]
        }
      }
    });
  }
}
