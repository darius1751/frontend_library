import { Author, Category } from "./";
export interface Book {
    id: string;
    code: string;
    frontPage: string;
    secureURL: string;
    title: string;
    description: string;
    publicationDate: Date;
    createdAt: Date;
    author: Author;
    categories: Category[];
}