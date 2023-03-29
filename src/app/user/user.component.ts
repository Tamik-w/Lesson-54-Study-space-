import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() name = '';
  @Input() status = '';
  @Input() img = '';
  @Output() update = new EventEmitter<{name: string, status: string}>();

  updateInfo(name: string, status: string) {
    this.update.emit({name, status});
  }
}