import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  barChartData: any;

  doughnutChartData: any;

  msgs: any[];
  barChartDataDep: any;
  barChartDataEch: any;

  constructor(translate: TranslateService) {
    this.barChartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Rejected',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'Approved',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }
    this.barChartDataDep = {
      labels: ['Java', 'PhP', 'C#', 'Python', 'Flutter and Ionic', 'RH', 'Marketing'],
      datasets: [
        {
          label: 'N° Employee by department',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [20, 15, 30, 10, 20, 10, 6]
        }
      ]
    }
    this.barChartDataEch = {
      labels: ['1', '2', '3', '4', '5', '6', '7'],
      datasets: [
        {
          label: 'N° Employee by level',
          backgroundColor: '#FFCE56',
          borderColor: '#FFCE56',
          data: [10, 6, 2, 5, 0, 2, 0]
        }
      ]
    }

    this.doughnutChartData = {
      labels: ['Request Waiting', 'Request Treated', 'Request Canceled'],
      datasets: [
        {
          data: [15, 80, 5],
          backgroundColor: [
            "#FFCE56",
            "#36A2EB",
            "#FF6384"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };

    this.msgs = [];

    translate.get("WelcomeMessage").subscribe((text: string) => {
      this.msgs.push({ severity: 'success', summary: '', detail: text });
    });

  }

  ngOnInit() {
  }

}
