import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './movie.html',
  styleUrl: './movie.css',
})
export class MovieComponent implements OnInit {
  movie: any = null;
  showConfirm = false;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getOne(Number(id)).subscribe(data => this.movie = data);
  }

  delete(): void {
    this.movieService.delete(this.movie.id).subscribe(() => {
      this.router.navigate(['/catalogo']);
    });
  }
}