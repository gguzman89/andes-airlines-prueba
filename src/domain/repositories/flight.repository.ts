import { FlightEntity } from "../entities/flight.entity";






export abstract class FlightRepository {
  
  abstract findBy( id: number ): Promise<FlightEntity>;
  abstract getAll(): Promise<FlightEntity[]>;
}


