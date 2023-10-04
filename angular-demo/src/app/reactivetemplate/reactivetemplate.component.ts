import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactivetemplate',
  templateUrl: './reactivetemplate.component.html',
  styleUrls: ['./reactivetemplate.component.css']
})
export class ReactivetemplateComponent implements OnInit{
  category = ['a', 'b', 'c'];
  signupForm: FormGroup;

  ngOnInit() {
      this.signupForm = new FormGroup({
        'userData': new FormGroup({
          'username': new FormControl(null, Validators.required),
          'email': new FormControl(null, [Validators.required, Validators.email]),
        }),
        
        'epic': new FormArray([]),
        'category': new FormControl('a')
      })
  }

  onSubmit() {
    console.log(this.signupForm)
  }

  onEpicButton() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('epic')).push(control);
  }

}
