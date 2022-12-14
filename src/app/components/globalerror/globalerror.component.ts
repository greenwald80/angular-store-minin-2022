import { Component, OnInit } from '@angular/core';
import { ErrorService } from './../../services/error.service';

@Component({
  selector: 'app-globalerror',
  templateUrl: './globalerror.component.html',
  styleUrls: ['./globalerror.component.scss']
})
export class GlobalerrorComponent implements OnInit {

  constructor(public errorService: ErrorService) { }

  ngOnInit(): void {
  }

}
