import { Injectable } from '@nestjs/common';

interface Book { 
  id: string;
  title: string;
  description: string;
  read: boolean;
}

@Injectable()
export class AppService {
  private books:Book[];

  getData(): Book[] {
    return this.books;
  }

  addBook(title: string, description: string): void {
    this.books.push({
      id: Date.now().toString(36) + Math.random().toString(36),
      title,
      description,
      read: false,
    })
  }
  editBook(id: string, title: string, description: string): void {
    this.books = this.books.map((book) => ({
      ...book,
      title: book.id === id ? title : book.title,
      description: book.id === id ? description : book.description,
    })
    )
  }
  bookRead(id: string, read: boolean): void {
    this.books = this.books.map((book) => ({
      ...book,
      read: book.id === id ? read : book.read,
    }))
  }
  
}
