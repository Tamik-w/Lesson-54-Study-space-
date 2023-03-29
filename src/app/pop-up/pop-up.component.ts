import { Component, Output, EventEmitter } from '@angular/core';
import { GroupNameService } from '../service/group-name.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {
  groupName = '';
  members = 0;

  @Output() close = new EventEmitter();

  constructor(private groupNameService: GroupNameService) {}

  ngOnInit() {
    this.groupName = this.groupNameService.getCurrentGroupName();
  }
}