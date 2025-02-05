import { Component, Input } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-post',
  imports: [RouterLink],
  templateUrl: './card-post.component.html',
  styleUrl: './card-post.component.css',
})
export class CardPostComponent {
  @Input() postCard!: IPost;
}
