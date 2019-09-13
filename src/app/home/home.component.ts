import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  readonly URL: string = "http://localhost:5555/product";
  posts: any;
  constructor(private _dataService: DataService, private _http: HttpClient) { 
    
  //   this._dataService.getdata().subscribe((data: Product[]) => this.product = {id: data['id'],
  //   name:data['name'],
  // color:data['color']});
  
  }
  
  product = [];
  ngOnInit() {
    if(this.product)
    console.log(this.product);
  }

  getProduct(){
    this._dataService.getdata().subscribe((data: any[]) => {
      console.log(data);
      this.product = data;
      console.log(this.product);
    });
    
    // this._http.get(this.URL).subscribe((res : any[])=>{
    //   console.log(res);
    //   this.product = res;
    //   });
    // console.log(this.URL);
    // this.posts = this._http.get(this.URL + '/posts');
  }

}
