import { Component, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { UsersService } from './service/users.service';
import { GroupNameService } from './service/group-name.service';
import { PopUpComponent } from './pop-up/pop-up.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public users: UsersService,
    public groupName: GroupNameService,
  ) {}

  @ViewChild('popUp', { read: ViewContainerRef })
  private viewRef!: ViewContainerRef;

  private componentRef!: ComponentRef<PopUpComponent>;

  updateUser(info: { name: string; status: string }, user: { name: string; status: string; url: string; id: number }) {
    user.name = info.name;
    user.status = info.status;
  }

  showPopUp() {
    this.componentRef = this.viewRef.createComponent(PopUpComponent);
    this.componentRef.instance.groupName = this.groupName.getCurrentGroupName();
    this.componentRef.instance.members = this.users.developers.length;
    this.componentRef.instance.close.subscribe(() => {
      this.viewRef.clear();
    });
  }
}