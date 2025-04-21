import { FlightDatasource, FlightEntity, FlightRepository } from "../../domain";






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


