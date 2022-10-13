import { MovieDTO } from "./movieDTO";

export interface ActorDTO {
  actorId: string;
  firstName: string;
  lastName: string;
  wealth: number;
  movieDTOs?: Array<MovieDTO>;
}
