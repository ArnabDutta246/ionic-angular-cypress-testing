import { Component } from '@angular/core';
import { DatabaseService } from '../shared/database/database.service';
import { from, interval, Observable, of, Subscription } from 'rxjs';
import { delay, filter, map, pluck, retry, retryWhen, scan, take, tap, toArray } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
   private db:DatabaseService
  ) {
  }

  ngOnInit(){
 
  //  this.db.getAllData('users')
  //  .subscribe(
  //    (res)=>{
  //     console.log(res);
  //    },
  //    (err)=>{console.log(err)},
  //    ()=>{console.log('completed')});
  }

}
