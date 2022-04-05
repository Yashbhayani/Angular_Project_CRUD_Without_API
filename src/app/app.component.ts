import { Component } from '@angular/core';
import { FormControlDirective, Validator, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_Project_1';
  case = 0;
  YP = 0;
  ASD = -1;
  user = new Array();

  userprofileForm = new FormGroup({
    //  id: new FormControl(this.user.length),
    fname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });

  onSubmit() {
    /*console.warn(this.userprofileForm.value);
      let id = this.userprofileForm.get('id')?.value;
      let userLenth = this.user.length;
      this.userprofileForm.controls['id'].setValue(userLenth + 1);*/
      if (this.case == 0) {
        this.user.push(this.userprofileForm.value);
      } else {
        this.user[this.ASD] = this.userprofileForm.value;
        this.case = 0;
        this.YP = 0;
        this.ASD = -1;
      }
      this.userprofileForm.controls['fname'].setValue(null);
      this.userprofileForm.controls['email'].setValue(null);
  }

  removelist(sd: number) {
    /*this.user = this.user.filter(item => item.sd!= sd);
      this.user = this.user.filter(item => item.sd - 1 != sd - 1);
      console.warn(sd);*/
    this.user.splice(sd, 1);
    /*this.user = this.user.filter(item => item.sd!= sd);
      console.warn(this.user[sd - 1]);
      console.warn(this.user.slice(sd-1,1));
      console.warn(this.user.slice(sd-1,1));*/
  }

  editlist(sd: number) {
    /*console.warn(this.user[sd-1]);
    this.userprofileForm.controls['id'].setValue(this.user[sd - 1].id);
    this.userprofileForm.controls['fname'].setValue(this.user[sd - 1].fname);
    this.userprofileForm.controls['email'].setValue(this.user[sd - 1].email);
    console.warn(this.user[sd])
    this.userprofileForm.controls['id'].setValue(this.user[sd].id);*/
    this.userprofileForm.controls['fname'].setValue(this.user[sd].fname);
    this.userprofileForm.controls['email'].setValue(this.user[sd].email);
    this.YP = this.user[sd];
    this.case = 1;
    this.ASD = sd;
  }
}
