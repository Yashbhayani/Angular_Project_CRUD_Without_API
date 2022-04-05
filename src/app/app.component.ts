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
    fname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });

  onSubmit() {
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
    this.user.splice(sd, 1);
  }

  editlist(sd: number) {
    this.userprofileForm.controls['fname'].setValue(this.user[sd].fname);
    this.userprofileForm.controls['email'].setValue(this.user[sd].email);
    this.YP = this.user[sd];
    this.case = 1;
    this.ASD = sd;
  }
}
