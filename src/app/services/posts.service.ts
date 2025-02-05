import { IPost } from './../interfaces/ipost.interface';
import { ICategory } from './../interfaces/icategory.interface';
import { Injectable } from '@angular/core';
import { POSTS } from '../../../db/db';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private arrPosts: IPost[] = POSTS;
  private id: number = 11;
  getAll() {
    return this.arrPosts;
  }
  getById(id: number): IPost | undefined {
    return this.arrPosts.find((post) => post.id === id);
  }
  insert(newPost: IPost) {
    this.arrPosts.push(newPost);
    newPost.id = this.id;
    this.id++;
    console.log('Nuevo post agregado:', newPost);
  }
  getCategories(): ICategory[] {
    const categories = Array.from(
      new Map(
        this.arrPosts.map((post) => [post.category.id, post.category])
      ).values()
    );

    return categories;
  }
  getAllBySearch(title: String, categoryId: number): IPost[] {
    if (title !== '') {
      const resultSearch = this.arrPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(title.toLowerCase()) &&
          post.category.id === categoryId
      );
      return resultSearch;
    } else {
      return this.getAll();
    }
  }
}
