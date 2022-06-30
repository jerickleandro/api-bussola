import { Tmdb } from '@src/clients/tmdb';
import axios from 'axios';
import movieExample from '@test/fixtures/movies_example.json';
import movieExampleNormalized from '@test/fixtures/movies_example_normalized.json';

jest.mock('axios');

describe('Tmdb client', () =>{
    it('should return the normalized movies description from the Tmdb service', async () => {
        const  idMovie = 1584;

        axios.get = jest.fn().mockResolvedValue({ data: movieExample });

        const tmdb = new Tmdb(axios);
        const response = await tmdb.fetchMovie(idMovie);
        console.log(response);
        expect(response).toEqual(movieExampleNormalized);
    });
});