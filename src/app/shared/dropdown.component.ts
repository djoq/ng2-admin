import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

declare var $:any;

@Component({
  selector: 'dropdown-component',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})

export class DropdownComponent implements OnInit {
  @Input() info;
  @Input() available;
  @Input() selected;


  @Output() filterUpdated = new EventEmitter();

  errorMessage = null;
  navigated = false; // true if navigated here

  constructor() {
    // this.filterUpdated.emit("update the lists");
  }


  mapper(a,b){
    let bIds = {}
    a.forEach(function(obj){
        bIds[obj.id] = obj;
    });
    // return Object.keys(bIds)
    return b.filter(function(obj){
        return !(obj.id in bIds);
    });
  }

  sort(obj){
    obj.sort(function(a, b){
     var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
     if (nameA < nameB) //sort string ascending
      return -1;
     if (nameA > nameB)
      return 1;
     return 0; //default return value (no sorting)
    });
    return obj
  }


  dropItem(arr, index){
    this.available.push(arr[index])
    arr.splice(index, 1);
  }

  add(arr, index){
    this.selected.push(arr[index])
    arr.splice(index,1);
  }

  populate(args){
    console.log("array length ->", args.length )
    if(args.length > 0) {
      for (let arg of args ){
        this.selected.push(arg)
      }
    }
    this.available = [];

    
  }

  ngOnInit() {
    this.available = this.mapper(this.selected,this.available)
  }

}





