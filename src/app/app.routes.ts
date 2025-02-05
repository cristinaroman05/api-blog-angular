import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/posts/posts.component';
import { NewComponent } from './pages/posts/new/new.component';
import { ViewPostComponent } from './pages/posts/view-post/view-post.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', component: PostsComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'post/:id', component: ViewPostComponent },
  { path: 'new', component: NewComponent },
];
