import { Component } from '@angular/core';

export interface Card {
  title: string,
  from: string,
  to: string,
  duaDate: string,
  status: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zenduForms';

  cards: Card[] = [
    {
      title: 'Requires Locations',
      from: 'denisgordiyeny@gmail.com',
      to: 'denisgordiyeny@gmail.com',
      duaDate: '06 December',
      status: 'Uncomplate'
    },
    {
      title: 'Requires Locations',
      from: 'denisgordiyeny@gmail.com',
      to: 'denisgordiyeny@gmail.com',
      duaDate: '06 December',
      status: 'Complate'
    },
    {
      title: 'Requires Locations',
      from: 'denisgordiyeny@gmail.com',
      to: 'denisgordiyeny@gmail.com',
      duaDate: '06 December',
      status: 'Uncomplate'
    },
    {
      title: 'Requires Locations',
      from: 'denisgordiyeny@gmail.com',
      to: 'denisgordiyeny@gmail.com',
      duaDate: '06 December',
      status: 'Uncomplate'
    }
  ]
}
