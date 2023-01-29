import { Component } from '@angular/core';
import { CurrencyapiService } from './currencyapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currency_converter';
  currjson: any = [];

  base = 'USD';
  cont2 = 'USD';
  result: string = '1';

  changebase(a:string){
    this.base = a;
    
  }
  tocountry(b:string){
    this.cont2 = b;
    
  }
  constructor(private currency: CurrencyapiService){}
  convert(){
    // console.log(this.base);
    // console.log(this.cont2);
    this.currency.getcurrencydata(this.base,this.cont2).subscribe(data=>{
      this.currjson = JSON.stringify(data);
      console.log(this.currjson);
      this.currjson = JSON.parse(this.currjson);
      console.log(this.currjson);
      if(this.cont2 =='USD'){
        this.result = this.currjson.info.rate.USD;
      }
      if(this.cont2 =='INR'){
        this.result = this.currjson.info.rate.INR;
      }
      if(this.cont2 =='EUR'){
        this.result = this.currjson.info.rate.EUR;
      }
    });
    
  }
}
