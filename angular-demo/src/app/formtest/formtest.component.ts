import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formtest',
  templateUrl: './formtest.component.html',
  styleUrls: ['./formtest.component.css']
})
export class FormtestComponent {

  constructor(private http: HttpClient) {

   }

  response = ""
  postHeaders = {}


  onSubmit(form: {name: string, amount: number}) {
    console.log(form)
    this.response += JSON.stringify(form);

    var h: {
      'Access-Control-Allow-Headers': "application/json",
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
      'Access-Control-Allow-Origin': '*'
    };

    this.http.post('http://localhost:5102/api/TodoItems', form, {headers: h}).subscribe(responseData => {
      console.log(responseData);
    });
  }
}
