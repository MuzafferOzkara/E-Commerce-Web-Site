import { Pipe, PipeTransform } from '@angular/core';
import { Item } from 'src/app/model/item';

@Pipe({
  name: 'itemFilter'
})
export class ItemFilterPipe implements PipeTransform {

  transform(value: Item[], filterText?: string): Item[] {
    filterText=filterText?filterText.toLocaleLowerCase():null

    return filterText?value.filter((i:Item)=>i.name.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
