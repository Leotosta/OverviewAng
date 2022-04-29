import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { map, Observable, Subscription } from 'rxjs';
import UserData from 'src/app/models/UserData';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  $subsUser: Subscription;
  $state: Observable<any>;
  _id: any;
  patrimony: number;

  constructor(private activateRouter: ActivatedRoute, private homeService: HomeService) { 
     
  }

  ngOnInit(): void {
    
   console.log(this.activateRouter);

   this.homeService.getUser().subscribe((user) => {
      this.patrimony = user.patrimony;
    });
    this._id = this.activateRouter.snapshot.paramMap.get('id');
  }

/*   ngOnDestroy(): void {
    this.$subsUser.unsubscribe();
  } */

}
