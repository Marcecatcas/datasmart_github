import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../../interfaces/user';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-profile-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile-user.component.html',
  styleUrl: './profile-user.component.scss'
})
export class ProfileUserComponent{
  @Input() user!: User;



}
