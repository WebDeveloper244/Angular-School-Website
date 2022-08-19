import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
myForm:any | FormGroup;
  constructor(
    private formBuilder:FormBuilder
  ) { 
    this. Form()
  }

  ngOnInit(): void {
  }

  Form(){
    this.myForm = this.formBuilder.group({
      Name:['',[Validators.required,Validators.minLength(4),Validators.maxLength(40),Validators.pattern(/^[A-Za-z]*$/)]],
      Email:['',[Validators.required,Validators.email]]
    })
  }
  submitMyForm(){
const formValue = this.myForm.value
console.log(formValue);

  }

}
