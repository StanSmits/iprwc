import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/shared/toast/toast-service';
import {HttpClient} from '@angular/common/http';
import { error } from 'cypress/types/jquery';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm!: FormGroup;

  constructor(
    private toastService: ToastService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.registerForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.pattern(
          /^(?=.{1,64}@)[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,})$/
        ),
      ])
    });
  }

  onRegister(): void {
    this.toastService.show('Registreren...', { classname: 'bg-info text-light', delay: 3000 });

    this.http.post('/auth/register', {
      name: this.registerForm.value.name,
      email: this.registerForm.value.email,
    }).subscribe(
      (res) => {
        this.toastService.show('Sucessvol geregistreerd, bekijk uw email voor het instellen van uw wachtwoord', { classname: 'bg-success text-light', delay: 10000 });
      },
      (err) => {
        this.toastService.show('Er is iets fout gegaan, probeer het later opnieuw!', { classname: 'bg-danger text-light', delay: 5000 });
      }
    );
  }
}
