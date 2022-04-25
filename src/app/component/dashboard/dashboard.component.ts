import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private activateRouter: ActivatedRoute) { 
    console.log(this.activateRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
   
  }

}
