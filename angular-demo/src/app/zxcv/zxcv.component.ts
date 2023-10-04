import { Component, ElementRef, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-zxcv',
  templateUrl: './zxcv.component.html',
  styleUrls: ['./zxcv.component.css']
})
export class ZxcvComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultZxcv = "Zxcv!";
  answer = '';

  constructor(private userService: UserService) {

  }

  // onSubmit(form: NgForm) {
  //   console.log(form)
  // }

  onSubmit() {
    console.log(this.signupForm);
  }



  onActivate() {
    //this.userService.activatedEmitter.emit(true);
    this.userService.activatedEmitter.next(true);

  }

}
