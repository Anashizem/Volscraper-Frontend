import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'angular-highcharts';

interface User {
  id: string;
  name: string;
  email: string;
  country: string;
}

@Component({
  selector: 'app-user-origin-country-percentages',
  templateUrl: './user-origin-country-percentages.component.html',
  styleUrls: ['./user-origin-country-percentages.component.css']
})
export class UserOriginCountryPercentagesComponent implements OnInit {
  chart: Chart;

  constructor(private http: HttpClient) {
    this.chart = new Chart({
      chart: {
        type: 'pie',
        height: 400,
        width: 400,
        backgroundColor: '#263238',
        borderRadius: 25,
        borderColor: '#fff',
        borderWidth: 1,
        plotShadow: true,
        plotBorderWidth: 0
      },
      title: {
        text: 'User Origin Country Percentages',
        style: {
          color: '#fff',
          fontFamily : 'poppins'
        }
      },
      series: [{
        type: 'pie',
        name: 'Countries',
        data: []
      }],
      credits: {
        enabled: false
      }
    });
  }

  ngOnInit(): void {
    this.http.get<User[]>('http://localhost:8085/Users/GetAllUsers').subscribe(users => {
      const countries: { [country: string]: number } = {};
      users.forEach(user => {
        if (!countries[user.country]) {
          countries[user.country] = 1;
        } else {
          countries[user.country]++;
        }
      });
      const totalUsers = users.length;
      const data = [];
      for (const country in countries) {
        if (countries.hasOwnProperty(country)) {
          const percentage = (countries[country] / totalUsers) * 100;
          data.push({ name: country, y: percentage });
        }
      }
      this.chart.addSeries({
        type: 'pie',
        name: 'Countries',
        data: data
      }, true, true);
    });
  }
}
