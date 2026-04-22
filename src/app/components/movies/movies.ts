import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './movies.html',
  styleUrl: './movies.css'
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  newMovie = { title: '', synopsis: '', year: 0, cover: '' };
  editingMovie: any = null;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movieService.getAll().subscribe(data => this.movies = data);
  }

  create(): void {
    this.movieService.create(this.newMovie).subscribe(() => {
      this.loadMovies();
      this.newMovie = { title: '', synopsis: '', year: 0, cover: '' };
    });
  }

  edit(movie: any): void {
    this.editingMovie = { ...movie };
  }

  update(): void {
    this.movieService.update(this.editingMovie.id, this.editingMovie).subscribe(() => {
      this.loadMovies();
      this.editingMovie = null;
    });
  }

  delete(id: number): void {
    this.movieService.delete(id).subscribe(() => this.loadMovies());
  }
}