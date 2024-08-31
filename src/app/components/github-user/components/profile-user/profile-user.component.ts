import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../../interfaces/user';
import { Repo } from '../../../../interfaces/repo';

@Component({
  selector: 'app-profile-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile-user.component.html',
  styleUrl: './profile-user.component.scss'
})
export class ProfileUserComponent{
  @Input() user!: User;
  @Input() repos: Repo[] | undefined;
}
