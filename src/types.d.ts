export interface Actor {
  name: string;
  imdb_id: string;
}

export interface CardProps {
  id: number;
  name: string;
  description: string;
  duration: string;
  rating: number;
  poster: string;
  genre: string;
}

export interface SingleMovieProps {
  id: number;
  name: string;
  description: string;
  duration: string;
  rating: number;
  poster: string;
  genre: string;
  trivia: string[];
  actors: Actor[];
}
