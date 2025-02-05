import { Component, inject } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interface';
import { PostsService } from '../../services/posts.service';
import { CardPostComponent } from '../../components/card-post/card-post.component';
import { SearchComponent } from '../../components/search/search.component';

@Component({
  selector: 'app-posts',
  imports: [CardPostComponent, SearchComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  arrPosts: IPost[] = [];
  postsService = inject(PostsService);

  ngOnInit() {
    this.arrPosts = this.postsService.getAll();
  }
  inputChange(event: boolean) {
    if (event === true) {
      this.arrPosts = this.postsService.getAll();
    }
  }
  search(event: { title: string; categoryId: number }) {
    this.arrPosts = this.postsService.getAllBySearch(
      event.title,
      event.categoryId
    );
  }
}
