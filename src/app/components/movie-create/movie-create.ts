import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie';

@Component({
  selector: 'app-movie-create',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './movie-create.html',
  styleUrl: './movie-create.css'
})
export class MovieCreateComponent {
  movie = { title: '', synopsis: '', year: 0, cover: '' };

  constructor(private movieService: MovieService, private router: Router) {}

  create(): void {
    this.movieService.create(this.movie).subscribe(() => {
      this.router.navigate(['/catalogo']);
    });
  }

  cancel(): void {
    this.router.navigate(['/catalogo']);
  }
}