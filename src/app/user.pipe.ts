import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  transform(users: any,  search: string): any {
    const tabres: any = [];
    users.filter((result: any) => {
      if (JSON.stringify(result).toLocaleLowerCase().includes(search.toLocaleLowerCase())){
        tabres.push(result);
      }
    });
    return tabres;
  }

}
