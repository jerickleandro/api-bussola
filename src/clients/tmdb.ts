import { AxiosStatic } from "axios";

export interface GenreMovie{
    id: number;
    name: string;
}
export interface ProductionCompaniesMovie{
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}
export interface ProductionCountriesMovie{
    iso_3166_1: string;
    name: string;
}
export interface SpokenLanguages{
    english_name: string;
    iso_639_1: string;
    name: string;
}

export interface TmdbMovieResponse{
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: object;
    budget: number;
    genres: GenreMovie[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompaniesMovie[];
    production_countries: ProductionCountriesMovie[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguages[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;

}

export interface MovieNormalized {
    backdrop_path: string;
    genres: GenreMovie[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
}

export class Tmdb {
    constructor(protected request: AxiosStatic){

    }

    public async fetchMovie(idMovie: number): Promise<MovieNormalized> {
        const response = await this.request.get<TmdbMovieResponse>(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=d54c84d18e40a8f2e4ea46b0055430a9&language=pt-BR`);
        return this.normalizeResponse(response.data);
    }

    private normalizeResponse = (movie: TmdbMovieResponse): MovieNormalized => {
        return { backdrop_path: `${movie.backdrop_path}`,
        genres: movie.genres,   
        id: movie.id,
        original_language: `${movie.original_language}`,
        original_title: `${movie.original_title}`,
        overview: `${movie.overview}`,
        popularity: movie.popularity,
        poster_path: `${movie.poster_path}`,
        release_date: `${movie.release_date}`,
        title: `${movie.title}`}

    }
}