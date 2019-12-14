import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-user-forms',
  templateUrl: './user-forms.component.html',
  styleUrls: ['./user-forms.component.css']
})
export class UserFormsComponent implements OnInit {
  userforms;
  constructor(private formBuilder: FormBuilder) {
    this.userforms = this.formBuilder.group({
      name: '',
      age: Number
    });
  }
  Onsubmit(user) {
    window.alert('your name is' + user.name + 'and you are ' + user.age.toString() + 'old');
  }

  ngOnInit() {
  }


  onSubmit(value: any) {

  }
}
