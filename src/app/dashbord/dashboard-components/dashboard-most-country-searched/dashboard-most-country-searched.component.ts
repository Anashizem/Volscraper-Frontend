import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChartOptions , ChartData } from 'chart.js';

@Component({
  selector: 'app-dashboard-most-country-searched',
  templateUrl: './dashboard-most-country-searched.component.html',
  styleUrls: ['./dashboard-most-country-searched.component.css']
})
export class DashboardMostCountrySearchedComponent implements OnInit {
  countryStatistics: { [key: string]: number } = {};
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: 'white',
          font : {
            size : 16,
            family : 'poppins'
          }
        },
        grid : {
          color : 'rgb(255, 255, 255 , 0.2)'
        }
      },
      y: {
        stacked: true,
        ticks: {
          color: 'white',
          font : {
            size : 16,
            family : 'poppins'
          }
        },
        grid : {
          color : 'rgb(255, 255, 255 , 0.2)'
        }
      },
    },
    
  };
  barChartData: any = {
    labels: [],
    datasets: [
      {
        data: [10],
        label: "Countries Searched",
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],        
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],     
        borderWidth: 2,
        barThickness: 20
      }
      
    ]
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllSearches();
  }

  getAllSearches() {
    this.http.get<any[]>('http://localhost:8085/searchs/GetAll').subscribe(
      (data: any[]) => {
        console.log('Data received from backend:', data);
        this.countryStatistics = this.getCountByDestination(data);
        this.updateChartData(this.countryStatistics);
      },
      error => {
        console.log('Error fetching data:', error);
      }
    );
  }

  getCountByDestination(data: any[]): { [key: string]: number } {
    const countDict: { [key: string]: number } = {};

    data.forEach(search => {
      const destination = search.to.toLowerCase();
      countDict[destination] = countDict[destination] ? countDict[destination] + 1 : 1;
    });

    return countDict;
  }

  updateChartData(data: { [key: string]: number }) {
    this.barChartData.labels = Object.keys(data);
    this.barChartData.datasets[0].data = Object.values(data);
  }
}
