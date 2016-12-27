import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Resource }  from './resource';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Data } from '../services/data';
import { ResourceService } from './resource.service';

declare var $:any;

@Component({
  selector: 'resource-detail',
  templateUrl: './resource-detail.component.html',
})

export class ResourceDetailComponent implements OnInit {
  resource: any;
  industries: any = [];
  departments: any = [];
  departmentEditor = false;
  industryEditor = false;

  changeIndustries = false;

  errorMessage = null;

  navigated = false; // true if navigated here
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private resourceService: ResourceService) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
       let id = params['id']; // (+) converts string 'id' to a number
       this.resourceService.loadItem(id)
       this.resourceService.resources$.subscribe(resource => this.resource = resource)
     });
  }
    
  update() {
    this.resourceService.editResource(this.resource);
  };

  remove() {
    this.resourceService.delete(this.resource.id);
  }


  goBack() {
    window.history.back();
  }

  addTeam(){
    this.router.navigate(['Teams']);
  }

  addOffice(){
    this.router.navigate(['Offices']);
  }

  teamSelect(team) {
    this.router.navigate(['TeamDetail', { id: team.id }]);
  }

  officeSelect(office) {
    this.router.navigate(['OfficeDetail', { id: office.id }]);
  }
}
