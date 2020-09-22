import { UserService } from './../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-admin',
  templateUrl: './display-admin.component.html',
  styleUrls: ['./display-admin.component.css']
})
export class DisplayAdminComponent implements OnInit {
  id: number;
  users: any
  constructor() { }

  ngOnInit(): void {

  }
}
