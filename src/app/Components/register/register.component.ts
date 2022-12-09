import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  userReg!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userser: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.userReg = this.fb.group({
      username: [
        '',
        [Validators.required, Validators.pattern('[A-Za-z0-9]{5,15}')],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.pattern('[A-Za-z0-9]{8,}')],
      ],
      cpassword: [
        '',
        [Validators.required, Validators.pattern('[A-Za-z0-9]{8,}')],
      ],
    });
  }

  ngOnInit(): void {}
  Submit() {
    this.userser.addUser(this.userReg.value).subscribe(
      () => {
        this.toastr.success('Registered');
        this.router.navigate(['/success']);
      },
      (err) => {
        this.toastr.error(`Error ${err.status}`, 'Error Message');
      }
    );
  }
}
