import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
	name: 'dropdown',
	pure: true
})
export class DropdownPipe implements PipeTransform {
  transform(selected: any, complete: any): any {
    for(let i = 0; i < complete.length; i++) {
      let trash = selected.find(x => x.id ===  complete[i]["id"] )
      if(!!trash) delete  complete[i]
    }
console.log("complete ->", complete)
return complete;
  }
}
