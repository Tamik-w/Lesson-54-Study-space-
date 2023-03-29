import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  groupName = 'Healthy lifestyle';
  newGroupName: string = '';

  editGroupName() {
    this.groupName = this.newGroupName;
    this.newGroupName = '';
  }
}
