import { ActorDTO } from "./ActorDTO";

export interface ActorwithId {
  actorId: string;
}

export interface MovieDTO {
  id: string;
  movieName: string;
  totalViews: number;
  releaseDate?: string;
  actorDTOs?: Array<ActorDTO | ActorwithId> | null;
}

export interface MoviebyIdDTO {
  id: string;
  movieName: string;
  totalViews: number;
  releaseDate?: string;
  actorDTOs?: Array<ActorDTO>;
}

export interface AddMovieDTO{
  movieName: string;
  totalViews: number;
  releaseDate?: string;
  actorDTOs: Array<ActorwithId>;
}