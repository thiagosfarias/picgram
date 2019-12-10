import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';
import { PlataformDetectorService } from '../../core/plataform-detector/plataform-detector.service';

@Component({
  templateUrl: './signin.component.html'
})

export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('userNameInput', {static: false}) userNameInput: ElementRef<HTMLInputElement>;

  // tslint:disable-next-line: no-trailing-whitespace
  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private platformDetectorService: PlataformDetectorService
              ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {

    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService
        .authenticate(userName, password)
        .subscribe(
            () => this.router.navigate(['user', userName]),
            err => {
                console.log(err);
                // tslint:disable-next-line: no-unused-expression
                this.platformDetectorService.isPlataformBrowser() && this.userNameInput.nativeElement.focus();
                this.loginForm.reset();
                alert('Nome do usuario ou senha incorretos');
            }
        );
}
}
