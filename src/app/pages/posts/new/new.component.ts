import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IPost } from '../../../interfaces/ipost.interface';
import { PostsService } from '../../../services/posts.service';
import { ICategory } from '../../../interfaces/icategory.interface';
import Swal from 'sweetalert2';
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
      title: new FormControl('', [
        Validators.minLength(10),
        Validators.required,
      ]),
      text: new FormControl('', [
        Validators.minLength(20),
        Validators.required,
      ]),
      author: new FormControl('', [
        Validators.minLength(4),
        Validators.required,
      ]),
      image: new FormControl('', [this.imageValidator, Validators.required]),
      category: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit() {
    const categories = this.postsService.getCategories();
    this.categoriesPost = categories;
  }
  onSubmit() {
    const newPost: IPost = this.postForm.value;
    this.postsService.insert(newPost);
    if (this.postForm.valid) {
      Swal.fire({
        icon: 'success',
        title: '¡Post creado!',
        text: 'Tu publicación se ha agregado correctamente.',
        confirmButtonText: 'Aceptar',
      });
      this.postForm.reset();
    }
  }
  imageValidator(controlName: AbstractControl): any {
    const imageUrl = controlName.value;
    const imageUrlRegex =
      /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg|bmp|tiff))$/i;
    if (!imageUrlRegex.test(imageUrl)) {
      return {
        imageValidator:
          'Formato de url incorrecta, la url debe comenzar por http:// y terminar en un formato de imagen jpg, png...',
      };
    }
    return null;
  }
  checkErrorField(field: string, error: string): boolean {
    if (
      this.postForm.get(field)?.hasError(error) &&
      this.postForm.get(field)?.touched
    ) {
      return true;
    }
    return false;
  }
}
