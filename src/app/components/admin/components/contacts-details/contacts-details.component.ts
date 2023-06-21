import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { IUser } from '../../interfaces/user';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.scss']
})
export class ContactsDetailsComponent implements OnInit{
  public user!: Observable<IUser>;
  public id!: number;

  constructor(private activatedRoute: ActivatedRoute, private adminService: AdminService) {}

  ngOnInit() {
    // this.activateRoute.params.subscribe(params => this.id = params?.['id']);

    // this.user = this.adminService.getPerson(this.id);

   this.user = this.activatedRoute.data.pipe(map(data => data?.['user']))
  }
}
