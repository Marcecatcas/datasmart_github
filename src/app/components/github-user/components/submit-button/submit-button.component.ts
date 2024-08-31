import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GithubApiService } from '../../../../services/github-api.service';
import { error } from 'console';

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

constructor(private apiService: GithubApiService){}

  getData = () => {
        this.onClick.emit(this.username);
     } 
  }

