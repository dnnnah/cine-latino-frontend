import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie';

@Component({
  selector: 'app-movie-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './movie-edit.html',
  styleUrl: './movie-edit.css'
})
export class MovieEditComponent implements OnInit {
  movie: any = { title: '', synopsis: '', year: 0, cover: '' };
  id!: number;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getOne(this.id).subscribe(data => this.movie = data);
  }

  update(): void {
    this.movieService.update(this.id, this.movie).subscribe(() => {
      this.router.navigate(['/movie', this.id]);
    });
  }

  cancel(): void {
    this.router.navigate(['/movie', this.id]);
  }
}