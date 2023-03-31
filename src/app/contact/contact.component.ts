import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmit = false;
  

  get username(): FormControl{
    return this.contactForm.get("username") as FormControl
  }

  get message(): FormControl{
    return this.contactForm.get("message") as FormControl
  }
  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      message: new FormControl(null, [Validators.required, Validators.minLength(10)])
    })
  }

  sendMsg(){
    this.isSubmit = true;
    //this.curName = this.contactForm.value.
  }

  showMsgError(){
    if(this.message.touched && !this.message.valid){
      if(this.message?.errors?.['required']){
        return "message is required"
      }

      if(this.message?.errors?.['minlength']){
        return "message should be minimum of 10 charcters length"
      }
    }

    return ''
  }

  showNameError(){
    if(this.username.touched && !this.username.valid){
      if(this.username?.errors?.['required']){
        return "username is required"
      }
    }

    return ''
  }

  
}
