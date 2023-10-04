import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rest-test',
  templateUrl: './rest-test.component.html',
  styleUrls: ['./rest-test.component.css']
})
export class RestTestComponent {

  private apiUrl = 'http://localhost:5102/api/TodoItems';

  constructor(private http: HttpClient) { }

  // testHeaders: {
  //   'Accept': '*/*',
  //   'Access-Control-Allow-Headers': "application/json",
  //   'Access-Control-Allow-Methods': '*',
  //   'Access-Control-Allow-Origin': '*'
  // };


  // Show these in the HTML for now
  postResponse = '';
  getResponse = '';
  delResponse = '';
  putResponse = '';


  onGet(form: { id: number }) {
    console.log("POST: " + form.id)
    this.http.get(this.apiUrl + '/' + form.id).subscribe(responseData => {
      this.getResponse = JSON.stringify(responseData);
    });
  }


  onDelete(form: { id: number }) {
    console.log("DELETE: " + form.id)
    this.http.delete(this.apiUrl + '/' + form.id).subscribe(responseData => {
      this.delResponse = JSON.stringify(responseData);
    });
  }

  
  onPostSubmit(form: { name: string }) {
    console.log("POST: " + form.name)

    const postData = {
      "id": 0,
      "name": form.name,
      "isComplete": true
    };

    const h = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // this.http.post(this.apiUrl, postData, { headers }).subscribe(responseData => {
    //   this.getResponse = JSON.stringify(responseData);
    // });

    this.http.post(this.apiUrl, postData, { headers: h }).subscribe(
      response => {
        console.log('POST request was successful', response);
        this.postResponse = JSON.stringify(response);
      },
      error => {
        console.error('POST request failed', error);
      }
    );
  }




  // This is almost idental to POST
  onPutSubmit(form: { name: string, id: number }) {
    console.log(form)
    console.log("PUT: " + form.name + " ID: " + form.id)

    const postData = {
      "id": form.id,
      "name": form.name,
      "isComplete": true
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.put(this.apiUrl + '/' + form.id, postData, { headers }).subscribe(
      (response) => {
        console.log('PUT request was successful', response);
        this.putResponse = JSON.stringify(response);
      },
      (error) => {
        console.error('PUT request failed', error);
      }
    );
  }


}