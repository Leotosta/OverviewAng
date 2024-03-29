import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public nome = 'string';
  checkForm: FormGroup;
  id: number;
  title: string;
  user = ''

  constructor(private activateRoute: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, private service: HomeService) { 
    this.configForm();
  }

  ngOnInit(): void {
    this.activateRoute.data.subscribe(data => {
      const firstId = data['userData'][0].userId;
      const firstTitle = data['userData'][0].title;
      this.id = firstId;
      this.title = firstTitle;

    });
  }

  configForm() {
    this.checkForm = this.formBuilder.group({
      username: ['', Validators.required],
      patrimony: ['', Validators.required],
      age: ['', Validators.required]
    });
  }

  submitForm() {
    console.log(this.checkForm.value);
    this.service.sendUser(this.checkForm.value);
    this.router.navigate(['finance', 'dashboard', `${this.id}`, `${this.title}`])

  }

}
