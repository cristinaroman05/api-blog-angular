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
    const post = this.arrPosts.find((post) => post.id === id);
    if (!post) {
      console.error(`No se encontró un post con el ID: ${id}`);
      return undefined;
    }
    return post;
  }
  insert(newPost: IPost) {
    this.arrPosts.push(newPost);
    newPost.id = this.id;
    this.id++;
  }
  getCategories(): ICategory[] {
    const categories = Array.from(
      new Map(
        this.arrPosts.map((post) => [post.category.id, post.category])
      ).values()
    );

    return categories;
  }
  getAllBySearch(title?: string, categoryId?: number): IPost[] {
    return this.arrPosts.filter((post) => {
      const matchesTitle = title
        ? post.title.toLowerCase().includes(title.toLowerCase())
        : true;
      const matchesCategory = categoryId
        ? post.category.id === categoryId
        : true;

      return matchesTitle && matchesCategory;
    });
  }
}
