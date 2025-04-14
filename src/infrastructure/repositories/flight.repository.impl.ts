import { FlightDatasource } from "../../domain/datasources/flight.datasource";
import { FlightEntity } from "../../domain/entities/flight.entity";
import { FlightRepository } from "../../domain/repositories/flight.repository";






export class FlightRepositoryImpl implements FlightRepository {

  constructor(
    private readonly datasource: FlightDatasource,
  ){}

  findBy(id: number): Promise<FlightEntity> {
    
    return this.datasource.findBy( id );
  }
  getAll(): Promise<FlightEntity[]> {
    
    return this.datasource.getAll();
  }

}


