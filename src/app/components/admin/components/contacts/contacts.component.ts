import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IUser } from '../../interfaces/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit{
  public personalList!: Observable<IUser[]>;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // this.personalList = this.adminService.getPersonalList();
    this.personalList = this.activatedRoute.data.pipe(map(data => data?.['users']))
  }
}
