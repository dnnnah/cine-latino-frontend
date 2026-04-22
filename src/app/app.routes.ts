import { Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies';
import { MovieComponent } from './components/movie/movie';
import { HomeComponent } from './pages/home/home';
import { MovieCreateComponent } from './components/movie-create/movie-create';
import { MovieEditComponent } from './components/movie-edit/movie-edit';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalogo', component: MoviesComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: 'catalogo/agregar', component: MovieCreateComponent },
  { path: 'catalogo/editar/:id', component: MovieEditComponent },
];