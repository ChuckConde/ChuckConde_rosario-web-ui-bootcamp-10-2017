export class Movie {
    id: number;
    name: string;
    poster: string;
    year: number;
    duration: string;
    type: string;
    summary: string;
    director: string;

    stars: Object[];
    constructor(movie: string, url: string, detail: string) {
        this.name = movie;
        this.poster = url;
        this.summary = detail;
    }

}
