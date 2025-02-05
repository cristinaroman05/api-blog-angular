import { Component, inject, Input } from '@angular/core';
import { PostsService } from '../../../services/posts.service';
import { IPost } from '../../../interfaces/ipost.interface';

@Component({
  selector: 'app-view-post',
  imports: [],
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.css',
})
export class ViewPostComponent {
  @Input() id: string = '';
  postsService = inject(PostsService);
  postData!: IPost;
  ngOnInit() {
    let id = Number(this.id);
    let response = this.postsService.getById(id);
    if (response) {
      this.postData = response;
    } else {
      alert('No se ha encontrado el post');
    }
  }
}
