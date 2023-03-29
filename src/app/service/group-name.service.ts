import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupNameService {
  private groupName = 'Healthy lifestyle';

  getCurrentGroupName() {
    return this.groupName;
  }

  setNewGroupName(newName: string) {
    this.groupName = newName;
  }
}