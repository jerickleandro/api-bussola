import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('movies')
export class MovieController {
  @Get('')
  public getMovieForLoggedUser(_: Request, res: Response): void {
    res.send([
      {
        id: '1',
        title: 'School of the rock',
        overview:
          "Fired from his band and hard up for cash, guitarist and vocalist Dewey Finn finagles his way into a job as a fifth-grade substitute teacher at a private school, where he secretly begins teaching his students the finer points of rock 'n' roll. The school's hard-nosed principal is rightly suspicious of Finn's activities. But Finn's roommate remains in the dark about what he's doing.",
        image:
          'https://image.tmdb.org/t/p/w500/zXLXaepIBvFVLU25DH3wv4IPSbe.jpg',
      },
      {
        id: '2',
        title: 'Tenacious D in The Pick of Destiny',
        overview:
          "In Venice Beach, naive Midwesterner JB bonds with local slacker KG and they form the rock band Tenacious D. Setting out to become the world's greatest band is no easy feat, so they set out to steal what could be the answer to their prayers... a magical guitar pick housed in a rock-and-roll museum some 300 miles away.",
        image: 'https://image.tmdb.org/t/p/w500/hdEEpy2IgUKt45Y8uopmNWg9TN.jpg',
      },
    ]);
  }
}
