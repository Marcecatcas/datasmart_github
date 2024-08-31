import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-submit-button',
  standalone: true,
  imports: [],
  templateUrl: './submit-button.component.html',
  styleUrl: './submit-button.component.scss'
})
export class SubmitButtonComponent {
  @Input() username!: string;
  @Output() onClick = new EventEmitter<any>();

  getData = () => {
        this.onClick.emit(this.username);
     } 
  }

