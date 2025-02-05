import { Component, EventEmitter, inject, Output } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ICategory } from '../../interfaces/icategory.interface';
import { IPost } from '../../interfaces/ipost.interface';

@Component({
  selector: 'app-search',
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  postsService = inject(PostsService);
  formSearch: FormGroup;
  categories!: ICategory[];
  inputVacio: boolean = false;
  @Output() searchEmitted: EventEmitter<{ title: string; categoryId: number }> =
    new EventEmitter();
  @Output() isInputEmpty: EventEmitter<boolean> = new EventEmitter();
  constructor() {
    this.formSearch = new FormGroup({
      title: new FormControl(),
      name: new FormControl(),
    });
  }
  ngOnInit() {
    this.categories = this.postsService.getCategories();
  }
  inputEmpty(event: any) {
    this.inputVacio = event.target.value.trim().length === 0;
    this.isInputEmpty.emit(this.inputVacio);
  }
  onSubmit() {
    const searchTitle = this.formSearch.value.title || '';
    const categoryId = Number(this.formSearch.value.name);

    this.searchEmitted.emit({ title: searchTitle, categoryId });
  }
}
