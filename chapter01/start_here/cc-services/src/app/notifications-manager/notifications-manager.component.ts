import { first } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationsService } from '../services/notifications.service';

@Component({
  selector: 'app-notifications-manager',
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.scss']
})
export class NotificationsManagerComponent implements OnInit {
  notificationsCount$: Observable<number>;
  constructor(private notificationsService: NotificationsService) { }

  ngOnInit(): void {
    this.notificationsCount$ = this.notificationsService.count$;
  }

  getCountVal(callback){
    this.notificationsCount$.pipe(first()).subscribe(callback);
  }

  addNotification() {
    this.getCountVal((countVal) => {
      this.notificationsService.setCount(++countVal);
    });
  }

  removeNotification() {
    this.getCountVal((countVal) => {
      if(countVal === 0){
        return;
      }
      this.notificationsService.setCount(--countVal);
    });
  }

  resetCount() {
    this.getCountVal((countVal) => {
      this.notificationsService.setCount(0);
    });
  }

}
