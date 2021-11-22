import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';

@Component({
  selector: 'client-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private booksService: BooksService) { }

  displayedColumns: string[] = ["id", "title", "author", "date", "actions"];
  dataSource = {} as any;
  book = {} as any;

  selectBook(book: any) {
    this.book = book;
  }

  newBook() {
    this.book = {};
  }

  async insertBook(f: any){
    await this.booksService.insertBook(f.value).subscribe((result)=>{
      console.log(result);
    });
    window.location.reload();
  }

  deleteBook(id: number){
    this.booksService.deleteBook(id).subscribe((result)=>{
      console.log(result);
    });
  }

  async updateBook(f: any){
    f.value.id = this.book['id'];
    await this.booksService.updateBook(f.value).subscribe((result)=>{
      console.log(result);
    });
    window.location.reload();
  }

  ngOnInit(): void {
    this.booksService.getBooks()
      .subscribe((result) => {
        this.dataSource = result;
      })
  }

}
