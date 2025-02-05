import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IPost } from '../../../interfaces/ipost.interface';
import { PostsService } from '../../../services/posts.service';
import { ICategory } from '../../../interfaces/icategory.interface';

@Component({
  selector: 'app-new',
  imports: [ReactiveFormsModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css',
})
export class NewComponent {
  postForm: FormGroup;
  postsData: IPost[] = [];
  postsService = inject(PostsService);
  categoriesPost: ICategory[] = [];
  constructor() {
    this.postForm = new FormGroup({
      title: new FormControl(),
      text: new FormControl(),
      author: new FormControl(),
      image: new FormControl(),
      category: new FormControl(),
      date: new FormControl(),
    });
  }
  ngOnInit() {
    const categories = this.postsService.getCategories();
    this.categoriesPost = categories;
  }
  onSubmit() {
    const newPost: IPost = this.postForm.value;
    this.postsService.insert(newPost);
    console.log(this.postsData);
  }
}
