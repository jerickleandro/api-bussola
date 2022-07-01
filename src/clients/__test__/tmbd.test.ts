import { Tmdb } from '@src/clients/tmdb';
import axios from 'axios';
import movieExample from '@test/fixtures/movies_example.json';
import movieExampleNormalized from '@test/fixtures/movies_example_normalized.json';

jest.mock('axios');

describe('Tmdb client', () =>{
    const mockedAxios = axios as jest.Mocked<typeof axios>
    it('should return the normalized movies description from the Tmdb service', async () => {
        const  idMovie = 1584;

        //axios.get = jest.fn().mockResolvedValue({ data: movieExample });
        mockedAxios.get.mockResolvedValue({ data: movieExample });

        const tmdb = new Tmdb(mockedAxios);
        const response = await tmdb.fetchMovie(idMovie);
        expect(response).toEqual(movieExampleNormalized);
    });

    it('should get a generic erro from Tmdb service when the request fail before reaching the service', async () => {
        const  idMovie = 1584;  
        mockedAxios.get.mockRejectedValue({ message: 'Network Error' });
        
        const tmdb = new Tmdb(mockedAxios);

        await expect(tmdb.fetchMovie(idMovie)).rejects.toThrow(
            'Unexpected erro when trying to comunicate to Tmdb: Network Error');
    });
});