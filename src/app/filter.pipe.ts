import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: Product[], search: string): Product[] {
    if (search) {
      return products.filter(product => {
        return product.name.toLowerCase().includes(search.toLowerCase());
      });
    } else {
      return products;
    }
  }
}
