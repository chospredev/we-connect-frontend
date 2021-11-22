import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'client-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private readonly moviesService: MoviesService) { }

  displayedColumns = ["id","title", "genre", "author", "date", "actions"] as any;
  dataSource = {} as any;
  movie = {} as any;

  selectMovie(movie: any) {
    this.movie = movie;
  }

  newMovie() {
    this.movie = {};
  }

  async insertMovie(f: any) {
    await this.moviesService.insertMovie(f.value).subscribe((result: any) => {
      console.log(result);
    });
    window.location.reload();
  }

  deleteMovie(id: number) {
    this.moviesService.deleteMovie(id).subscribe((result: any) => {
      console.log(result);
    });
  }

  async updateMovie(f: any) {
    f.value.id = this.movie['id'];
    await this.moviesService.updateMovie(f.value).subscribe((result: any) => {
      console.log(result);
    });
    window.location.reload();
  }

  ngOnInit(): void {
    this.moviesService.getMovies()
      .subscribe((result: any) => {
        console.log(result);
        this.dataSource = result;
      })
  }

}
