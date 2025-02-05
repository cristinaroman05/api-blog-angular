import { ICategory } from './icategory.interface';

export interface IPost {
  id?: number;
  title: string;
  text: string;
  author: string;
  image: string;
  category: ICategory;
  date: Date;
}
