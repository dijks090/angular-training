import { Component } from '@angular/core';
import { Movie } from './movies/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Amalie houdt van films';

  public movies: Array<Movie>;
  public selectedMovie: Movie;

  constructor() {
    this.movies = [
          // tslint:disable-next-line:max-line-length
      new Movie(1, 'Pulp Fiction', 'SciFi', 7, 'data:image/jpeg;base64,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')
          // tslint:disable-next-line:max-line-length
    , new Movie(2, 'Turks fruit', 'Natuur', 7, 'https://static.veronicamagazine.nl/srv/728x410/fdb/media/a-z/t/turks_fruit/co_turks_fruit_01.jpg')
        // tslint:disable-next-line:max-line-length
    , new Movie(3, 'Vaiana', 'Kinder', 9, 'https://static0.persgroep.net/volkskrant/image/f06ada17-62b2-437b-bd4d-dfcc5649555c?width=664&height=374')
        // tslint:disable-next-line:max-line-length
    , new Movie(4, 'Winx', 'Kinder', 10, 'https://pre00.deviantart.net/6ade/th/pre/i/2014/262/e/6/winx_mythix_____by_lightshinebright-d7zm0b6.jpg')
    // tslint:disable-next-line:max-line-length
    , new Movie(5, 'Barbie', 'Kinder', 8, 'https://lh3.googleusercontent.com/W3FL8oO8ZCUCBda49_zvuYXnKzQHRoRLXqvaJYE3kLelaT5xT8LWF_fDRlD-KO_ag4MbUKTyw_Cf5VR_uQ')
  ];
  }

  public onMovieClicked(movie: Movie) {
    this.selectedMovie = movie;
  }
}
