import { Component, OnInit } from '@angular/core';
import { Resource }            from './resource';
import { Router, ActivatedRoute } from '@angular/router';
import { ResourceService } from './resource.service';

@Component({
  selector: 'resources-component',
  templateUrl: './resources.component.html',
})

export class ResourcesComponent implements OnInit {
  resources: any;
  search: {};
  errorMessage = "";

  selectedResource: Resource;
  addingResource = false;
  constructor(private resourceService: ResourceService, private router: Router) { }

  ngOnInit() {
    let self = this;

    // Search and Filter options
    this.search = {
      endpoint: "/interfaces/1/resources/",
      previews: ["name"],
      options: [
        { label: "Departments", key: "departments", url: "departments" }]
    };

    this.resourceService.loadList();
    this.resourceService.resources$
      .subscribe(resources => this.resources = resources,
        error =>  this.errorMessage = <any>error);
  }

  addResource () {
    this.addingResource = true;
    this.selectedResource = null;
  }

  close() {
    this.addingResource = false;
  }

  onSelect(resource: Resource) {
    this.selectedResource = resource;
    this.addingResource = false;
    // this.gotoDetail();
  }

  gotoDetail() {
    this.router.navigate(['ResourceDetail', { id: this.selectedResource._id }]);
  }

  filterUpdated(filter){
    //handle the event
    this.addingResource = false;
    this.selectedResource = filter;
  }
}
