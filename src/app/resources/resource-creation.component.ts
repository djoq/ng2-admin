import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Resource } from './resource';
import { ResourceService } from './resource.service';

declare var $:any;

@Component({
  selector: 'resource-creation',
  templateUrl: './resource-creation.component.html',
})

export class ResourceCreationComponent implements OnInit {
  resource: any = {};
  industries: any;
  errorMessage = null;

  navigated = false; // true if navigated here
  constructor(
    private resourceService: ResourceService,
    private router: Router) {
  }

  ngOnInit() {
    this.resource.html = "resource";
  }

  create() {
    this.resourceService.create(this.resource);
  };

  goBack() {
    this.router.navigate(['Dashboard']);
  }
}
