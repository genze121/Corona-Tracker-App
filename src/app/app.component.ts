import { Component } from '@angular/core';
import { CoronaService } from './service/corona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Corona-Tracker-App';
  countries: any = [];
  active:any;
  country: any;
  confirmed: any
  recovered: any
  death: any

  mydate: any;

  constructor(private service: CoronaService) {

  }

  ngOnInit() {
    this.service.getCountry().subscribe(data => {
      console.log(data);
      this.countries = data;
      this.mydate = new Date();
    })
  }

  getCountry(c: any) {
    console.log(c);
    this.country = c;
  }

  getDetails() {
    this.service.getData(this.country).subscribe(data => {
      console.log(data);
      var index = data.length - 1;
      this.active=data[index].Active;
      this.confirmed = data[index].Confirmed;
      this.recovered = data[index].Recovered;
      this.death = data[index].Deaths;
    });
  }
}
